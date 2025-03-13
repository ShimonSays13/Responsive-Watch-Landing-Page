// Show Menu //
const navMenu = document.getElementById('nav-menu'), 
navToggle = document.getElementById('nav-toggle'), 
navClose = document.getElementById('nav-close')

// Menu Show //
// Validate if constant exists //
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// Menu hidden //
// Validate if constant exists //
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// Remove Menu Mobile //
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Swiper Watches //
const swiperWatches = new Swiper('.home__swiper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
});

// Gsap Animation //
gsap.from('.home__images', 1.5, {opacity: 0, y:150, delay: .1})
gsap.from('.home__data', 1.8, {opacity: 0, x:-100, delay: .8})
gsap.from('.home__info', 1.8, {opacity: 0, y:-100, delay: 1})
