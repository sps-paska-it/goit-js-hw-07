import { galleryItems } from './gallery-items.js';
// Change code below this line
const divGallery = document.querySelector('.gallery');

const htmlGallery = galleryItems.map(({ preview, original, description }) => {
  return  `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}).join('');

divGallery.insertAdjacentHTML('beforeend', htmlGallery);

divGallery.addEventListener('click', openOriginalImage)
function openOriginalImage(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
    return;
    };
    
    const instance = basicLightbox.create(
        `<img class="gallery__image"
            src="${e.target.dataset.source}"
            alt="Image description"
            />`);
    instance.show();
};
