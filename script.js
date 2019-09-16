let hamburgerBar = document.querySelector('#hamburger-bar');
let hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerBar.addEventListener('click', () => {
    if (hamburgerMenu.style.display === 'block') {
        hamburgerMenu.style.display = 'none';
    } else {
        hamburgerMenu.style.display = 'block';

    }
})