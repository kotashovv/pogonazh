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
const paintFirstSlider = new Swiper('.paint-first__slider', {
    direction: 'horizontal',
    spaceBetween: 30,
    navigation : {
        nextEl: '.paint-slider-btn-nxt',
        prevEl: '.paint-slider-btn-prv',
    },
})

const paintSecondSlider = new Swiper('.paint-second-slider__slider', {
    direction: 'horizontal',
    loop: false,
    spaceBetween: 30,
    slidesPerView: 1,
    breakpoints: {
        620: {
            slidesPerView: 2,
        },
    },
    navigation : {
        nextEl: '.paint-second-slider__next-btn',
        prevEl: '.paint-second-slider__prev-btn',
    },
})
