const tabsBtn = document.querySelectorAll('.subscription__tab-btn');
const tabsItems = document.querySelectorAll('.subscription__content-list');

const onClickTab = () => {
  tabsBtn.forEach((item) => {
    item.addEventListener('click', () => {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      if (!currentTab.classList.contains('subscription__content-list--active')) {
        // eslint-disable-next-line no-shadow
        tabsBtn.forEach((item) => {
          item.classList.remove('subscription__tab-btn--active');
        });

        // eslint-disable-next-line no-shadow
        tabsItems.forEach((item) => {
          item.classList.remove('subscription__content-list--active');
        });

        currentBtn.classList.add('subscription__tab-btn--active');
        currentTab.classList.add('subscription__content-list--active');
      }
    });
  });
};

export {onClickTab};
