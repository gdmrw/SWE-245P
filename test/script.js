
let currentIndex = 0;
const slides = document.querySelectorAll('.slide__container img');
const totalSlides = slides.length;

function moveToNextSlide() {
  if (currentIndex === totalSlides - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (currentIndex === 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex--;
  }
  updateSlidePosition();
}

function updateSlidePosition() {
  const slideContainer = document.querySelector('.slide__container');
  slideContainer.style.transform = 'translateX(' + (-currentIndex * 800) + 'px)';
}

document.querySelector('.next').addEventListener('click', moveToNextSlide);
document.querySelector('.prev').addEventListener('click', moveToPrevSlide);
