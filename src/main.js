import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  formSearch: document.querySelector('.form-inline'),
  galleryContainer: document.querySelector('.gallery'),
};

refs.formSearch.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const query = e.target.elements.query.value;

  getImage(query).then(data => {
    // console.log(data);
    renderImage(data);
  });

  e.target.reset();
}

function getImage(hit) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const PARAMS = `?key=42099926-52a1046a87902a6e56a7e135a&q=${hit}&image_type=photo&orientation=horizontal&safesearch=true `;

  const url = BASE_URL + END_POINT + PARAMS;

  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .catch(error => console.error('Error fetching data:', error));
}

function imageTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
            />
          </a>
          <ul class="data-image">
            <li class="data-item">
              <div>
                <span>Likes</span>
                <span>${likes}</span>
              </div>
            </li>
            <li class="data-item">
              <div>
                <span>Views</span>
                <span>${views}</span>
              </div>
            </li>
            <li class="data-item">
              <div>
                <span>Comments</span>
                <span>${comments}</span>
              </div>
            </li>
            <li  class="data-item">
              <div>
                <span>Downloads</span>
                <span>${downloads}</span>
              </div>
            </li>
          </ul>
        </li>`;
}
function generateItemListTemplate(hits) {
  return hits.map(imageTemplate).join('');
}

function renderImage() {
  const markup = generateItemListTemplate(hits);
  refs.galleryContainer.innerHTML = markup;
}
