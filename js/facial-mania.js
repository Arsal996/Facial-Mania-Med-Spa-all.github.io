// navbar toggle js 

const navbar = document.querySelector('.menu-list');
const burger = document.querySelector('.menu-bar')

burger.addEventListener('click', function(){
    navbar.classList.toggle('show-menu');
})

// client feedback slider 

      var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      });
