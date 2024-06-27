const header = document.querySelector('.header');
const main = document.querySelector('main');

// Adjust layout to fixed header works properly
export const adjustMainPadding = () =>
  (main.style.paddingBlockStart = getHeaderHeight() + 'px');

// Returns current header height
export const getHeaderHeight = () => header.getBoundingClientRect().height;
