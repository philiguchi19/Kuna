const slider = document.querySelector('.slider');
const container = slider.querySelector('.featuredparent-container');
const prevBtn = slider.querySelector('.prev-btn');
const nextBtn = slider.querySelector('.next-btn');
const slides = container.children;
const slideWidth = slides[0].getBoundingClientRect().width;
const slideMargin = parseInt(getComputedStyle(slides[0]).marginRight);
const slideCount = slides.length;
const visibleSlides = Math.floor(slider.clientWidth / (slideWidth + slideMargin));
let currentIndex = 0;

function moveToSlide(index) {
  container.style.transform = `translateX(-${index * (slideWidth + slideMargin)}px)`;
  currentIndex = index;
}

function updateButtons() {
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= slideCount - visibleSlides;
}

prevBtn.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
  updateButtons();
});

nextBtn.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
  updateButtons();
});

updateButtons();
