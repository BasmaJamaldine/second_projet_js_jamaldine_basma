const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');
const carouselContent = document.querySelector('.carousel-content');
const slides = document.querySelectorAll('.carousel-slide');
const indicatorsContainer = document.querySelector('.carousel-indicators');

let currentIndex = 0;

// Create indicators
slides.forEach((_, index) => {
  const indicator = document.createElement('div');
  indicator.classList.add('carousel-indicator');
  indicator.dataset.index = index;
  indicatorsContainer.appendChild(indicator);
});

const indicators = document.querySelectorAll('.carousel-indicator');

const updateCarousel = () => {
  const slideWidth = slides[0].offsetWidth;
  carouselContent.style.transform = `translateX(${-currentIndex * slideWidth}px`

  indicators.forEach(indicator => {
    indicator.classList.remove('active');
  });
  indicators[currentIndex].classList.add('active');
};

nextButton.addEventListener('click', () => {
  const totalSlides = slides.length;
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  const totalSlides = slides.length;
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

// Indicator click event
indicators.forEach(indicator => {
  indicator.addEventListener('click', (e) => {
    currentIndex = parseInt(e.target.dataset.index);
    updateCarousel();
  });
});

// Initial setup
updateCarousel();