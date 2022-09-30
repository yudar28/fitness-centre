const swiperReviews = () => {
  // eslint-disable-next-line no-undef
  const swiperReview = new Swiper('.reviews__swiper', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    autoHeight: true,
  });

  // eslint-disable-next-line no-unused-expressions
  swiperReview.height;
};

export {swiperReviews};
