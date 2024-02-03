import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  formSearch: document.querySelector('.form-inline'),
  galleryContainer: document.querySelector('.gallery'),
};

refs.formSearch.addEventListener('submit', onFormSubmit);

const lightbox = new SimpleLightbox('.gallery a', {});

function onFormSubmit(e) {
  e.preventDefault();

  const query = e.target.elements.query.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Caution',
      titleColor: '#FFFFFF',
      message: 'Please enter text to search',
      position: 'topRight',
      messageColor: '#FFFFFF',
      backgroundColor: '#4169E1',
      iconUrl: null,
    });
    return;
  }

  getImage(query).then(data => {
    const result = {
      images: data.hits || [],
      total: data.total || 0,
    };

    if (result.images.length === 0) {
      iziToast.warning({
        titleColor: '#FFFFFF',
        message:
          'Sorry, there are no images matching your search query. Please try again.',
        messageSize: '16px',
        position: 'topRight',
        messageColor: '#FFFFFF',
        backgroundColor: '#EF4040',
        iconUrl: null,
      });
    }
    renderImage(data.hits);

    lightbox.refresh();
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
    .catch(error => {
      iziToast.error({
        title: 'Error',
        titleColor: '#FFFFFF',
        message: 'An error occurred while fetching data. Please try again.',
        position: 'topRight',
        messageColor: '#FFFFFF',
        backgroundColor: '#FF6347',
        iconUrl: null,
      });
      console.error('Error fetching data:', error);
    });
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
            <li>
              <div class="data-item">
                <span class="image-property">Likes</span>
                <span>${likes}</span>
              </div>
            </li>
            <li>
              <div class="data-item">
                <span class="image-property">Views</span>
                <span>${views}</span>
              </div>
            </li>
            <li>
              <div class="data-item">
                <span class="image-property">Comments</span>
                <span>${comments}</span>
              </div>
            </li>
            <li">
              <div class="data-item">
                <span class="image-property">Downloads</span>
                <span>${downloads}</span>
              </div>
            </li>
          </ul>
        </li>`;
}

function imagesTemplate(hits) {
  return hits.map(imageTemplate).join('');
}

function renderImage(Hits) {
  const markup = imagesTemplate(Hits);
  refs.galleryContainer.innerHTML = markup;
}
