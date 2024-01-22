import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import imgUrl from './img/octagon.svg';

const API_KEY = '41936160-9a65f6e7e8f481bcadff71523';
const BASE_URL = 'https://pixabay.com/api';

const testGallery = query => {
  const requestUrl = `${BASE_URL}/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
  //console.log(requestUrl);
  return fetch(requestUrl).then(response => {
    if (!response.ok) {
      throw new Error(`Error-message ${response.status}`);
    }
    return response.json();
  });
};

//popup with image
const lightbox = () => {
  new SimpleLightbox('.gallery a', {
    showCounter: false,
    captionsData: 'alt',
    captionDelay: 250,
  });
};
//popup with image

//Form
const form = document.querySelector('#imageSearchForm');
const searchInput = document.querySelector('#searchInput');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('#gallery');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();

  if (searchTerm === '') {
    showError('Please enter a search term.');
    return;
  }

  loader.style.display = 'block';
  gallery.innerHTML = '';

  testGallery(searchTerm)
    .then(data => {
      if (data.hits.length > 0) {
        let markup = '';
        data.hits.forEach(element => {
          markup += createMarkup(element);
        });
        gallery.innerHTML = markup;
        lightbox();
      } else {
        showError(
          'Sorry, there are no images matching your search query. Please, try again!'
        );
      }
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      showError('An error occurred while fetching images. Please try again.');
    })
    .finally(() => {
      loader.style.display = 'none';
      searchInput.value = '';
    });
});
//Form

//markup
function createMarkup({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="gallery-item"><a class="gallery-link" href="${largeImageURL}"><img class="gallery-image" src="${webformatURL}" data-source="${largeImageURL}" alt="${tags}"></a><div class='gallery-history'><div class='block1'><span>Likes</span>${likes}</div><div class='block2'><span>Views</span>${views}</div><div class='block3'><span>Comments</span>${comments}</div><div class='block4'><span>Downloads</span>${downloads}</div></li>`;
}
//markup

//function
function showError(message) {
  iziToast.error({
    theme: 'dark',
    message: message,
    timeout: 5000,
    backgroundColor: '#EF4040',
    iconUrl: imgUrl,
    messageColor: '#FAFAFB',
  });
}
//function
