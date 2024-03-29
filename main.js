
// Mobile menu toggle function
function toggleMobileMenu() { 
    var menu = document.querySelector('.navbar__side');
    var toggle = document.querySelector('.navbar__mobile-toggle');
    
    menu.classList.toggle('navbar__side--open');
    toggle.classList.toggle('open');
}


// Mobile slider function
// 
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




// Accordion


function toggleAccordion(element) {
    const item = element.parentElement;
    const items = document.querySelectorAll('.accordion-item');
  
    for (const otherItem of items) {
      if (otherItem !== item) {
        otherItem.querySelector('.accordion-body').style.display = 'none';
        otherItem.querySelector('.accordion-icon').textContent = '+';
      }
    }
  
    const body = item.querySelector('.accordion-body');
    const isOpen = body.style.display === 'block';
    
    body.style.display = isOpen ? 'none' : 'block';
    element.querySelector('.accordion-icon').textContent = isOpen ? '+' : '-';
  }
  