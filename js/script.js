const slides = document.querySelector('.slides');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const totalSlides = document.querySelectorAll('.slide').length;
let currentIndex = 0;
const slideWidth = window.innerWidth;

window.addEventListener('resize', () => {
  location.reload(); // reloads to recalculate slide width
});

function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === totalSlides - 1;
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlidePosition();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    updateSlidePosition();
  }
});

updateSlidePosition(); // initialize
//menu bar
var nav = document.getElementById('navbar');
  function showMenu()
  {
    nav.style.right ='0';
  }
  function hideMenu()
  {
    nav.style.right ='-100%';
  }

