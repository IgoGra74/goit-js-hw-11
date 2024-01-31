import"./assets/vendor-491d46cf.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const s={formSearch:document.querySelector(".form-inline"),galleryContainer:document.querySelector(".gallery")};s.formSearch.addEventListener("submit",l);function l(r){r.preventDefault();const n=r.target.elements.query.value;c(n).then(a=>{m(a.hits)}),r.target.reset()}function c(r){const n="https://pixabay.com",a="/api/",i=`?key=42099926-52a1046a87902a6e56a7e135a&q=${r}&image_type=photo&orientation=horizontal&safesearch=true `,e=n+a+i;return fetch(e).then(t=>{if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return t.json()}).catch(t=>console.error("Error fetching data:",t))}function u({webformatURL:r,largeImageURL:n,tags:a,likes:i,views:e,comments:t,downloads:o}){return`<li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${a}"
            />
          </a>
          <ul class="data-image">
            <li class="data-item">
              <div>
                <span>Likes</span>
                <span>${i}</span>
              </div>
            </li>
            <li class="data-item">
              <div>
                <span>Views</span>
                <span>${e}</span>
              </div>
            </li>
            <li class="data-item">
              <div>
                <span>Comments</span>
                <span>${t}</span>
              </div>
            </li>
            <li  class="data-item">
              <div>
                <span>Downloads</span>
                <span>${o}</span>
              </div>
            </li>
          </ul>
        </li>`}function d(r){return r.map(u).join("")}function m(r){const n=d(r);s.galleryContainer.innerHTML=n}
//# sourceMappingURL=commonHelpers.js.map
