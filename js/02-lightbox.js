import { galleryItems } from './gallery-items.js';
// Change code below this line
const markup = galleryItems.map((galleryItem) => `<li class="list"><a class="gallery__item" title="${galleryItem.description}" href="${galleryItem.original}"><img class="photo" src=${galleryItem.preview}  width="340px" height="227px" alt="${galleryItem.description}"></a></li>`).join("");

const ulEl = document.querySelector(".gallery")


ulEl.insertAdjacentHTML("beforeend", markup);

//оформлення галереї
ulEl.style.listStyle = "none";
ulEl.style.display = "flex";
ulEl.style.flexWrap = "wrap";
ulEl.style.gap = "15px"


//підключення бібліотеки

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    scrollZoom: false,
})

ulEl.addEventListener('mouseover', () => {
    if (event.target.nodeName !== "IMG") {
        return
    }
    event.target.style.transform = "scale(1.03)"
    event.target.style.transition = "200ms"

})
ulEl.addEventListener('mouseout', () => {
    event.target.style.transform = "scale(1.00)"
    event.target.style.transition = "200ms"
})
