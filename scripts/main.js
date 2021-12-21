const header = document.querySelector('.header');

window.addEventListener('scroll', ()=> {
    let scrolling = window.scrollY;
    if ( scrolling > 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
})

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

const projectSlider = new Swiper('.project__body', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    navigation : {
        nextEl: '.project-btn-next',
        prevEl: '.project-btn-prev',
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
            spaceBetween: 30,
        },
        }
})
const feedbackSlider = new Swiper('.feedback__body', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    navigation : {
        nextEl: '.feedback-btn-next',
        prevEl: '.feedback-btn-prev',
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
            spaceBetween: 30,
        },
        }
})
const feedSlider = new Swiper('.feed__slider', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    navigation : {
        nextEl: '.feed-button-next',
        prevEl: '.feed-button-prev',
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
            spaceBetween: 30,
        },
        }
})

var accBtn = document.querySelectorAll('.faq-btn');
    var accList = document.querySelectorAll('.faq-text');

    if (accBtn) {

    for (i = 0; i < accBtn.length; i++) {
    accBtn[i].addEventListener('click', function() {

        if (!this.classList.contains('active-accord')) {
            const allAccord = document.querySelectorAll('.active-accord');
            allAccord.forEach(function(item){
                item.click();
            })
        } 
        

        this.classList.toggle('active-accord')
        var accInfo = this.nextElementSibling;
        accInfo.classList.toggle('active')

        if (accInfo.style.maxHeight) {
            accInfo.style.maxHeight = null;
        } else {
            accInfo.style.maxHeight = accInfo.scrollHeight + 'px';
        }
    });
  }
}