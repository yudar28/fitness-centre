const swiperReviews = () => {
  const swiperReviews = new Swiper('.reviews__swiper', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
};

export {swiperReviews};
