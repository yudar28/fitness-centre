import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {addSmoothScroll} from './modules/modals/smoth-scroll';
import {onClickTab} from './modules/modals/tabs';
import {swiperCoaches} from './modules/modals/swiperCoaches';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    initModals();
  });
});

addSmoothScroll();

onClickTab();

swiperCoaches();

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

// const swiperReviewPrev = document.querySelector('.reviews .swiper-button-next');
// const swiperReviewNext = document.querySelector('.reviews .swiper-button-prev');

// swiperReviewPrev.addEventListener('click', () => {
//   swiperReviews.slidePrev();
// });

// swiperReviewNext.addEventListener('click', () => {
//   swiperReviews.slideNext();
// });
// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
