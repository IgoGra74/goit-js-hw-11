import{S as c,i as s}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const l={formSearch:document.querySelector(".form-inline"),galleryContainer:document.querySelector(".gallery")};l.formSearch.addEventListener("submit",m);const u=new c(".gallery a",{});function m(r){r.preventDefault();const o=r.target.elements.query.value.trim();if(!o){s.warning({title:"Caution",titleColor:"#FFFFFF",message:"Please enter text to search",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#4169E1",iconUrl:null});return}g(o).then(a=>{({images:a.hits||[],total:a.total||0}).images.length===0&&s.warning({titleColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again.",messageSize:"16px",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#EF4040",iconUrl:null}),f(a.hits),u.refresh()}),r.target.reset()}function g(r){const o="https://pixabay.com",a="/api/",i=`?key=42099926-52a1046a87902a6e56a7e135a&q=${r}&image_type=photo&orientation=horizontal&safesearch=true `,e=o+a+i;return fetch(e).then(t=>{if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return t.json()}).catch(t=>{s.error({title:"Error",titleColor:"#FFFFFF",message:"An error occurred while fetching data. Please try again.",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#FF6347",iconUrl:null}),console.error("Error fetching data:",t)})}function p({webformatURL:r,largeImageURL:o,tags:a,likes:i,views:e,comments:t,downloads:n}){return`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${a}"
            />
          </a>
          <ul class="data-image">
            <li>
              <div class="data-item">
                <span class="image-property">Likes</span>
                <span>${i}</span>
              </div>
            </li>
            <li>
              <div class="data-item">
                <span class="image-property">Views</span>
                <span>${e}</span>
              </div>
            </li>
            <li>
              <div class="data-item">
                <span class="image-property">Comments</span>
                <span>${t}</span>
              </div>
            </li>
            <li">
              <div class="data-item">
                <span class="image-property">Downloads</span>
                <span>${n}</span>
              </div>
            </li>
          </ul>
        </li>`}function d(r){return r.map(p).join("")}function f(r){const o=d(r);l.galleryContainer.innerHTML=o}
//# sourceMappingURL=commonHelpers.js.map
