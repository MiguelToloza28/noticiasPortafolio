(function () {
    "use strict";

    document.addEventListener('DOMContentLoaded', function () {
        let boton = document.querySelector('.menu-btn');
        boton.addEventListener('click', () => {
            document.querySelector('.nav-menu').classList.toggle('show');//toggle añade o quita la clase show
        });


        //***Scroll libreria Scroll Reveal */
        ScrollReveal().reveal('.showcase', { delay: 500 });
        ScrollReveal().reveal('.news-cards', { delay: 500 });
        ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
        ScrollReveal().reveal('.cards-banner-two', { delay: 500 });
        ScrollReveal().reveal('.social', { delay: 500 });
        ScrollReveal().reveal('.footer-links', { delay: 500 });
        //******************************** */
    });
}());