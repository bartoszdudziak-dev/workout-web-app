import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { MAX_WIDTH_MOBILE_NAV } from '../config';

class MobileMenu {
  constructor() {
    this._btnOpen = document.querySelector('#btnOpen');
    this._btnClose = document.querySelector('#btnClose');
    this._menu = document.querySelector('#navMenu');
    this._body = document.querySelector('body');
    this._main = document.querySelector('main');
    this._overlay = document.querySelector('.overlay');
    this._media = window.matchMedia(`(max-width: ${MAX_WIDTH_MOBILE_NAV}px)`);
  }

  // Initialization
  init() {
    this._setupMenu(this._media);
    this._btnOpen.addEventListener('click', this._openMobileMenu.bind(this));
    this._btnClose.addEventListener('click', this._closeMobileMenu.bind(this));
    this._media.addEventListener('change', this._setupMenu.bind(this));
    this._menu.addEventListener('click', this._linkClickHandler.bind(this));
  }

  // Set up menu based on screen size
  _setupMenu(e) {
    if (e.matches) {
      this._menu.setAttribute('inert', '');
    } else {
      this._closeMobileMenu();
      this._menu.removeAttribute('inert', '');
    }
  }

  _openMobileMenu() {
    this._btnOpen.setAttribute('aria-expanded', 'true');
    this._main.setAttribute('inert', '');
    this._menu.removeAttribute('inert');
    disableBodyScroll(this._body);
    this._btnClose.focus();
    this._overlay.classList.remove('hidden');
  }

  _closeMobileMenu() {
    this._btnOpen.setAttribute('aria-expanded', 'false');
    this._main.removeAttribute('inert');
    this._menu.setAttribute('inert', '');
    enableBodyScroll(this._body);
    this._btnOpen.focus();
    this._overlay.classList.add('hidden');
  }

  _linkClickHandler(e) {
    const link = e.target.closest('.nav__link');
    if (!link || !this._media.matches) return;
    this._closeMobileMenu();
  }
}

export default new MobileMenu();
