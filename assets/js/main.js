
let openIcon = document.getElementById('btnHamburger');
let closeIcon = document.getElementById('hamburgerMenu');
let navList = document.getElementById('navList');

let themeSwitch = document.getElementById('themeSwitch');

themeSwitch.addEventListener('click', () => {
    let body = document.body;
    console.log(body);
    if( body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
    else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    }
})


if (openIcon && closeIcon && navList) {
    openIcon.addEventListener('click', () => {
        openIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
        closeIcon.classList.add('flex');
        navList.classList.remove('hidden')

    });

    closeIcon.addEventListener('click', () => {
        closeIcon.classList.add('hidden');
        openIcon.classList.remove('hidden');
        navList.classList.add('hidden')

    });
}


document.addEventListener('DOMContentLoaded', function () {
    const swiperComments = new Swiper('.mySwiperComments', {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });

    // اگر از swiper-element برای گالری استفاده می‌کنید، نیازی به این کد نیست:
    // const swiperGallery = document.querySelector('#swiperGallery .mySwiperGallery');
    // if (swiperGallery) {
    //   swiperGallery.swiper.update(); // یا هر عملیات دیگر نیاز
    // }
});



