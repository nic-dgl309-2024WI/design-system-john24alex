
// Mobile menu toggle function
function toggleMobileMenu() { 
    var menu = document.querySelector('.navbar__side');
    var toggle = document.querySelector('.navbar__mobile-toggle');
    
    menu.classList.toggle('navbar__side--open');
    toggle.classList.toggle('open');
}


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function nextSlide() {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  updateSlidePosition();
}

function updateSlidePosition() {
  const slider = document.querySelector('.slider');
  const slideWidth = slides[currentSlide].clientWidth;
  const newTransformValue = -(slideWidth * currentSlide);
  slider.style.transform = `translateX(${newTransformValue}px)`;
}

//setInterval(nextSlide, 3000); // Cambia el slide cada 3 segundos
