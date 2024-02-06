import{S as u,i as s}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerpolicy&&(e.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?e.credentials="include":r.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(r){if(r.ep)return;r.ep=!0;const e=a(r);fetch(r.href,e)}})();const g=document.querySelector(".form-inline"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");g.addEventListener("submit",p);const m=new u(".gallery a",{});function p(t){t.preventDefault();const o=t.target.elements.query.value.trim();if(!o){s.warning({title:"Caution",titleColor:"#FFFFFF",message:"Please enter text to search",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#4169E1",iconUrl:null});return}c.innerHTML="",l.style.display="block",d(o).then(function({hits:a,total:n}){Array.isArray(a)&&a.length>0&&n>0?(y(a),m.refresh()):s.warning({titleColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again.",messageSize:"16px",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#EF4040",iconUrl:null})}).catch(a=>{console.error("Error fetching data:",a),s.error({title:"Error",titleColor:"#FFFFFF",message:"An error occurred while fetching data. Please try again.",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#FF6347",iconUrl:null})}).finally(function(){t.target.reset(),l.style.display="none"})}function d(t){const o="https://pixabay.com",a="/api/",n=`?key=42099926-52a1046a87902a6e56a7e135a&q=${t}&image_type=photo&orientation=horizontal&safesearch=true `,r=o+a+n;return fetch(r).then(e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()}).catch(e=>{throw s.error({title:"Error",titleColor:"#FFFFFF",message:"An error occurred while fetching data. Please try again.",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#FF6347",iconUrl:null}),console.error("Error fetching data:",e),e})}function F({webformatURL:t,largeImageURL:o,tags:a,likes:n,views:r,comments:e,downloads:i}){return` <li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img
              class="gallery-image"
              src="${t}"
              alt="${a}"
            />
          </a>
          <ul class="data-image">
            <li>
              <div class="data-item">
                <span class="image-property">Likes</span>
                <span>${n}</span>
              </div>
            </li>
            <li>
              <div class="data-item">
                <span class="image-property">Views</span>
                <span>${r}</span>
              </div>
            </li>
            <li>
              <div class="data-item">
                <span class="image-property">Comments</span>
                <span>${e}</span>
              </div>
            </li>
            <li">
              <div class="data-item">
                <span class="image-property">Downloads</span>
                <span>${i}</span>
              </div>
            </li>
          </ul>
        </li>`}function f(t){return t.map(F).join("")}function y(t){const o=f(t);c.innerHTML=o}
//# sourceMappingURL=commonHelpers.js.map
