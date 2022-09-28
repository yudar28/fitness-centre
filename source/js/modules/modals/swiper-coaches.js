const swiperCoaches = () => {
  // eslint-disable-next-line no-undef
  const swiper = new Swiper('.coaches__swiper', {
    spaceBetween: 0,
    loop: true,
    simulateTouch: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

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

  const swiperPrev = document.querySelector('.coaches .swiper-button-prev');
  const swiperNext = document.querySelector('.coaches .swiper-button-next');

  swiperPrev.addEventListener('click', () => {
    swiper.slidePrev();
  });

  swiperNext.addEventListener('click', () => {
    swiper.slideNext();
  });
};

export {swiperCoaches};
