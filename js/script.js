// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.header__toggle');
    const menu = document.querySelector('.header__menu');
    const body = document.querySelector('body');

    toggle.addEventListener('click', function () {
        // Toggle menu visibility
        menu.classList.toggle('active');
        toggle.classList.toggle('active');

        // Prevent scrolling when menu is open
        body.classList.toggle('no-scroll');
    });
});