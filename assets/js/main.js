(function () {

    AOS.init();

    window.openModal = function (modalId) {
        document.getElementById(modalId).style.display = 'flex';
        document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden');
    }

    window.closeModal = function (modalId) {
        document.getElementById(modalId).style.display = 'none';
        document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden');
    }

    document.onkeydown = function (event) {
        event = event || window.event;
        if (event.keyCode === 27) {
            document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden');
            let modals = document.getElementsByClassName('modal');
            Array.prototype.slice.call(modals).forEach(i => {
                i.style.display = 'none'
            })
        }
    };
})();

(function () {
    var swiper = new Swiper(".gallery-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        mousewheel: false,
        keyboard: true,
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    });
})();

(function () {
    var swiper = new Swiper(".gallery-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        mousewheel: false,
        keyboard: true,
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });
})();

(function () {
    const englishToPersianNumbers = {
        '0': '۰',
        '1': '۱',
        '2': '۲',
        '3': '۳',
        '4': '۴',
        '5': '۵',
        '6': '۶',
        '7': '۷',
        '8': '۸',
        '9': '۹'
    };

    function convertEnglishToPersianNumbers(text) {
        return text.replace(/[0-9]/g, (match) => englishToPersianNumbers[match]);
    }

    function convertNumbersInElement(element) {
        if (element.hasChildNodes()) {
            element.childNodes.forEach(child => convertNumbersInElement(child));
        } else if (element.nodeType === Node.TEXT_NODE) {
            element.textContent = convertEnglishToPersianNumbers(element.textContent);
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        convertNumbersInElement(document.body);
    });

})();