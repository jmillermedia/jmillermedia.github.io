(() => {
    //console.log('fired');
    const navMenu = document.querySelector('#mainNav');
    const burgerButton = document.querySelector('#burgerNav');
    const ham = document.querySelector('.ham');
    burgerButton.addEventListener('click', () => {
        navMenu.classList.toggle('opened');
        ham.classList.toggle('active');
        if (navMenu.classList.contains('opened')) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'scroll';
        }
    });

})();