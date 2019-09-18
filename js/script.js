let hamburgerBar = document.querySelector('.hamburger-bar');
let hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerBar.addEventListener('click', () => {

    if (hamburgerMenu.style.display === 'none') {

        hamburgerMenu.style.display = 'block';
    } else {
        hamburgerMenu.style.display = 'none';

    }

});