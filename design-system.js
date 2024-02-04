
// Mobile menu toggle function
function toggleMobileMenu() { 
    var menu = document.querySelector('.navbar__side');
    var toggle = document.querySelector('.navbar__mobile-toggle');
    
    menu.classList.toggle('navbar__side--open');
    toggle.classList.toggle('open');
}


