import{i as d,S as f}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="41936160-9a65f6e7e8f481bcadff71523",h="https://pixabay.com/api",y=s=>{const o=`${h}/?key=${m}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(t=>{if(!t.ok)throw new Error(`Error-message ${t.status}`);return t.json()})},p=()=>{new f(".gallery a",{showCounter:!1,captionsData:"alt",captionDelay:250})},g=document.querySelector("#imageSearchForm"),c=document.querySelector("#searchInput"),l=document.querySelector(".loader"),u=document.querySelector("#gallery");g.addEventListener("submit",function(s){s.preventDefault();const o=c.value.trim();if(o===""){i("Please enter a search term.");return}l.style.display="block",u.innerHTML="",y(o).then(t=>{if(t.hits.length>0){let a="";t.hits.forEach(e=>{a+=v(e)}),u.innerHTML=a,p()}else i("Sorry, there are no images matching your search query. Please, try again!")}).catch(t=>{console.error("Error fetching images:",t),i("An error occurred while fetching images. Please try again.")}).finally(()=>{l.style.display="none",c.value=""})});function v({webformatURL:s,largeImageURL:o,tags:t,likes:a,views:e,comments:r,downloads:n}){return`<li class="gallery-item"><a class="gallery-link" href="${o}"><img class="gallery-image" src="${s}" data-source="${o}" alt="${t}"></a><div class='gallery-history'><div class='block1'><span>Likes</span>${a}</div><div class='block2'><span>Views</span>${e}</div><div class='block3'><span>Comments</span>${r}</div><div class='block4'><span>Downloads</span>${n}</div></li>`}function i(s){d.error({theme:"dark",message:s,timeout:5e3,backgroundColor:"#EF4040",messageColor:"#FAFAFB"})}
//# sourceMappingURL=commonHelpers.js.map
