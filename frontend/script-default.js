// let all_slider_gallery;
$(document).ready(function () {

    // new Swiper('.header_home_slider', {
    //     loop: true,
    //     pagination: {
    //         el: '.swiper-pagination',
    //     },
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     }
    // });
    new Swiper('.gallery_slider_cnt', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    new Swiper('.simple_gallery', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    
    $('.hamburger').click(function (event) {
        event.preventDefault();
        $('.hamburger-box').toggleClass('is-active');
        $('header nav').toggleClass('menu-visible');
    });
});