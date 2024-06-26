
// Mobile menu toggle function
function toggleMobileMenu() { 
    var menu = document.querySelector('.navbar__side');
    var toggle = document.querySelector('.navbar__mobile-toggle');
    
    menu.classList.toggle('navbar__side--open');
    toggle.classList.toggle('open');
}




// Copy paste function

function copyToClipboard() {
    // Get the text from the pre element
    const textToCopy = document.getElementById("codeSnippet").innerText;
    
    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert("Code copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  }
  
// Pagination
  document.querySelectorAll('.pagination__item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault(); 
        const pageNumber = item.textContent;
        console.log(`Page ${pageNumber} clicked`); 
       
    });
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
  

