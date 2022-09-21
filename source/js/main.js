import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {addSmoothScroll} from './modules/modals/smoth-scroll';
import {onClickTab} from './modules/modals/tabs';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    initModals();
  });
});

addSmoothScroll();

onClickTab();

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
  initialSlide: 2,

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
