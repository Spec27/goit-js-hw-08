// Add imports above this line
import { galleryItems } from './gallery-items';

import '../css/common.css';
import '../css/01-gallery.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

// Change code below this line

console.log(galleryItems);

const createGallery = document.querySelector('.gallery');
const galleryMarcup = createGalleryCards(galleryItems);
createGallery.insertAdjacentHTML('beforeend', galleryMarcup);
createGallery.addEventListener('click', flippingThroughImages);

function createGalleryCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            <a class="gallery__item" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
              />
            </a> `;
    })
    .join('');
}

function flippingThroughImages(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
}
const lightbox = new SimpleLightbox('.gallery a', {
  scrollZoom: true,
  captionDelay: 250,
  captionsData: 'alt',
  doubleTapZoom: 2,
});
