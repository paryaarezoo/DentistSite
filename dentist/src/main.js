
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
    // Swiper برای بخش نظرات (Comments)
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

const num = 123456;
const persianNumber = num.toLocaleString("fa-IR");

console.log(persianNumber); 
function convertAllNumbersToPersian() {
  const elements = document.querySelectorAll("body *:not(script):not(style)");

  elements.forEach(el => {
    if (el.children.length === 0 && el.innerText.match(/\d/)) {
      el.innerText = toPersianDigits(el.innerText);
    }
  });
}

window.onload = convertAllNumbersToPersian;

