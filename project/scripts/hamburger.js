// Select navigation and hamburger button elements
const mainNav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

// Toggle navigation display and button icon on click
hambutton.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hambutton.classList.toggle('show');
});