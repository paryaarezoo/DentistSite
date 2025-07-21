(function () {

    let openIcon = document.getElementById('btnHamburger');
    let closeIcon = document.getElementById('hamburgerMenu');
    let navList = document.getElementById('navList');

    let themeSwitch = document.getElementById('themeSwitch');

    themeSwitch.addEventListener('click', () => {
        let body = document.body;
        console.log(body);
        if (body.classList.contains('dark-mode')) {
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
})();