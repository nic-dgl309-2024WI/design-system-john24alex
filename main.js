
// Mobile menu toggle function
function toggleMobileMenu() { 
    var menu = document.querySelector('.navbar__side');
    var toggle = document.querySelector('.navbar__mobile-toggle');
    
    menu.classList.toggle('navbar__side--open');
    toggle.classList.toggle('open');
}



const slider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // Multiply by 2 to increase scroll speed
  slider.scrollLeft = scrollLeft - walk;
});

//Touch events for mobile support
slider.addEventListener('touchstart', (e) => {
  isDown = true;
  startX = e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchend', () => {
  isDown = false;
});

slider.addEventListener('touchmove', (e) => {
  if (!isDown) return;
  const x = e.touches[0].pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});


////


const sliderGardening = document.querySelector('.gardening-slider');
let isDownG = false;
let startXG;
let scrollLeftG;

sliderGardening.addEventListener('mousedown', (e) => {
  isDownG = true;
  startXG = e.pageX - sliderGardening.offsetLeft;
  scrollLeftG = sliderGardening.scrollLeftG;
});

sliderGardening.addEventListener('mouseleave', () => {
  isDownG = false;
});

sliderGardening.addEventListener('mouseup', () => {
  isDownG = false;
});

sliderGardening.addEventListener('mousemove', (e) => {
  if (!isDownG) return;
  e.preventDefault();
  const x = e.pageX - sliderGardening.offsetLeft;
  const walk = (x - startXG) * 2; // Multiply by 2 to increase scroll speed
  sliderGardening.scrollLeftG = scrollLeftG - walk;
});

//Touch events for mobile support
sliderGardening.addEventListener('touchstart', (e) => {
  isDownG = true;
  startXG = e.touches[0].pageX - sliderGardening.offsetLeft;
  scrollLeftG = sliderGardening.scrollLeftG;
});

sliderGardening.addEventListener('touchend', () => {
  isDownG = false;
});

sliderGardening.addEventListener('touchmove', (e) => {
  if (!isDownG) return;
  const x = e.touches[0].pageX - sliderGardening.offsetLeft;
  const walk = (x - startXG) * 2;
  sliderGardening.scrollLeftG = scrollLeftG - walk;
});
