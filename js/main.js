window.onscroll = () => {
    // scroll navbar
    let navbar_scroll = document.querySelector('.header'),
        sticky = navbar_scroll.offsetTop;
    if(window.pageYOffset > sticky){
        navbar_scroll.classList.add('sticky');
    } else {
        navbar_scroll.classList.remove('sticky');
    }
    // end scroll navbar
    // start back to top
    let backToTop = document.querySelector('.scroll-top');
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
};