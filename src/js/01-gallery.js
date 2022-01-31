// Add imports above this line
import { galleryItems } from './gallery-items';
import sampleTpl from '../templates/sample.hbs';

import '../css/common.css';
import '../css/01-gallery.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

const createGallery = document.querySelector('.gallery');
const galleryMarcup = createGalleryCards(galleryItems);
createGallery.insertAdjacentHTML('beforeend', galleryMarcup);

function createGalleryCards(galleryItems) {
  return sampleTpl(galleryItems);
}

createGallery.addEventListener('click', event => {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
});

const lightbox = new SimpleLightbox('.gallery a', {
  scrollZoom: true,
  captionDelay: 250,
  captionsData: 'alt',
  doubleTapZoom: 2,
});
