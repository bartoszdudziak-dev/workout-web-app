import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

class MobileMenu {
  constructor() {
    this.btnOpen = document.querySelector('#btnOpen');
    this.btnClose = document.querySelector('#btnClose');
    this.menu = document.querySelector('#navMenu');
    this.body = document.querySelector('body');
    this.main = document.querySelector('main');
    this.media = window.matchMedia('(max-width: 600px)');
  }

  // Initialization
  init() {
    this.setupMenu(this.media);
    this.btnOpen.addEventListener('click', this.openMobileMenu.bind(this));
    this.btnClose.addEventListener('click', this.closeMobileMenu.bind(this));
    this.media.addEventListener('change', this.setupMenu.bind(this));
  }

  // Set up menu based on screen size
  setupMenu(e) {
    if (e.matches) {
      this.menu.setAttribute('inert', '');
    } else {
      this.closeMobileMenu();
      this.menu.removeAttribute('inert', '');
    }
  }

  openMobileMenu() {
    this.btnOpen.setAttribute('aria-expanded', 'true');
    this.main.setAttribute('inert', '');
    this.menu.removeAttribute('inert');
    disableBodyScroll(this.body);
    this.btnClose.focus();
  }

  closeMobileMenu() {
    this.btnOpen.setAttribute('aria-expanded', 'false');
    this.main.removeAttribute('inert');
    this.menu.setAttribute('inert', '');
    enableBodyScroll(this.body);
    this.btnOpen.focus();
  }
}

export default new MobileMenu();
