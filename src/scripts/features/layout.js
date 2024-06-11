const header = document.querySelector('.header');
const main = document.querySelector('main');

export const adjustMainPadding = function () {
  const headerHeight = getHeaderHeight();
  main.style.paddingBlockStart = headerHeight + 'px';
};

export const getHeaderHeight = function () {
  const headerHeight = header.getBoundingClientRect().height;
  return headerHeight;
};
