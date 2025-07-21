// (function () {

//     let openIcon = document.getElementById('btnHamburger');
//     let closeIcon = document.getElementById('hamburgerMenu');
//     let navList = document.getElementById('navList');

//     let themeSwitch = document.getElementById('themeSwitch');

//     themeSwitch.addEventListener('click', () => {
//         let body = document.body;
//         console.log(body);
//         if (body.classList.contains('dark-mode')) {
//             body.classList.remove('dark-mode');
//             body.classList.add('light-mode');
//         }
//         else {
//             body.classList.remove('light-mode');
//             body.classList.add('dark-mode');
//         }
//     })

//     if (openIcon && closeIcon && navList) {
//         openIcon.addEventListener('click', () => {
//             openIcon.classList.add('hidden');
//             closeIcon.classList.remove('hidden');
//             closeIcon.classList.add('flex');
//             navList.classList.remove('hidden')

//         });

//         closeIcon.addEventListener('click', () => {
//             closeIcon.classList.add('hidden');
//             openIcon.classList.remove('hidden');
//             navList.classList.add('hidden')

//         });
//     }
// })();

(function () {
    let openIcon = document.getElementById('btnHamburger');
    let closeIcon = document.getElementById('hamburgerMenu');
    let navList = document.getElementById('navList');
    let themeSwitch = document.getElementById('themeSwitch');
    let body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    }

    themeSwitch.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light'); 
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark'); 
        }
    });

    if (openIcon && closeIcon && navList) {
        openIcon.addEventListener('click', () => {
            openIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
            closeIcon.classList.add('flex');
            navList.classList.remove('hidden');
        });

        closeIcon.addEventListener('click', () => {
            closeIcon.classList.add('hidden');
            openIcon.classList.remove('hidden');
            navList.classList.add('hidden');
        });
    }
})();
