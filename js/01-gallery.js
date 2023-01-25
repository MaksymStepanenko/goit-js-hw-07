import { galleryItems } from './gallery-items.js';
// Change code below this line
const markup = galleryItems.map((galleryItem) => `<li class="list"><img class="photo" src=${galleryItem.preview}   width="340px" height="227px" alt="${galleryItem.description}"></li>`).join("");

const ulEl = document.createElement("ul");

const wrapperImgEl = document.querySelector(".gallery")
wrapperImgEl.append(ulEl)

ulEl.insertAdjacentHTML("beforeend", markup);

//оформлення галереї
ulEl.style.listStyle = "none";
ulEl.style.display = "flex";
ulEl.style.flexWrap = "wrap";
ulEl.style.gap = "15px"

//делегування подій
let originalSize;
let imageAlt;
ulEl.addEventListener('click', () => {
    if (event.target.nodeName !== "IMG") {
        return
    }
    imageAlt = event.target.getAttribute("alt")
    // console.log(imageAlt);
    for (const item of galleryItems) {
        if (item.description == imageAlt) {
            originalSize = item.original;
            console.log(originalSize);
            break
        }
    }
    const instance = basicLightbox.create(`
    <img src="${originalSize}" width="800" height="600">
`)

instance.show()
})
// курсор

ulEl.addEventListener('mouseover', () => {
    if (event.target.nodeName !== "IMG") {
        return
    }
    event.target.style.transform = "scale(1.03)"
    event.target.style.transition = "200ms"
    event.target.style.cursor = "zoom-in"

})
ulEl.addEventListener('mouseout', () => {
    event.target.style.transform = "scale(1.00)"
    event.target.style.transition = "200ms"
})

