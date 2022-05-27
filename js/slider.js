const swiper = new Swiper('.swiper', {

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 3,
});


window.addEventListener('resize', () => {
  if (window.innerWidth < 460) {
    onslider('.swiper-wrapper')
  }
})

function onslider() {
  console.log('adasd');
}

