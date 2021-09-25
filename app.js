const menuNav = document.querySelector('.menu-nav');
const burgerMenu = document.querySelector('.fa-bars');

burgerMenu.addEventListener('click', function() {
    menuNav.classList.toggle('show');
});