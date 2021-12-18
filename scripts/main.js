const aboutSlider = new Swiper('.about-slider-container', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: '.about-slider-nav-next',
        prevEl: '.about-slider-nav-prev',
      },
});
const technoSlider = new Swiper('.techno__slider', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: {
        nextEl: '.techno-next',
        prevEl: '.techno-prev',
      },
    breakpoints: {
    // when window width is >= 320px
    320: {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 20,
    },
    }
})
