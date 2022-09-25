const swiperCoaches = () => {
  const swiper = new Swiper('.swiper', {
    spaceBetween: 0,
    loop: true,
    simulateTouch: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    hashNavigation: true,

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    watchOverflow: true,
    slidesPerView: 1,

    // номер слайда с которого начинается слайдер
    initialSlide: 3,

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      1200: {
        slidesPerView: 4,
        initialSlide: 0,
        spaceBetween: 40,
      },
    },
  });

  const swiperPrev = document.querySelector('.swiper-button-prev');
  const swiperNext = document.querySelector('.swiper-button-next');

  swiperPrev.addEventListener('click', () => {
    swiper.slidePrev();
  });

  swiperNext.addEventListener('click', () => {
    swiper.slideNext();
  });
};

export {swiperCoaches};
