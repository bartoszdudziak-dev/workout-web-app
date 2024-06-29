import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

class AboutView {
  _body = document.querySelector('body');
  _modal = document.querySelector('.about');
  _btnOpen = document.querySelector('#about');
  _btnClose = document.querySelector('#btnCloseAbout');

  constructor() {
    this._btnOpen.addEventListener('click', e => {
      e.preventDefault();
      this._open();
    });
  }

  _open() {
    this._modal.showModal();
    disableBodyScroll(this._body);
    this._observeModal();
    this._btnClose.focus();
  }

  _close() {
    this._modal.close();
    enableBodyScroll(this._body);
  }

  _observeModal() {
    this._btnClose.focus();

    // Observe modal for change of open attribute
    // To make scrolling works when user press ESC button to close modal
    const config = {
      attributes: true,
      attributesFilter: ['open'],
    };

    const observer = new MutationObserver((mutationsList, observer) => {
      for (let mutation of mutationsList) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'open'
        ) {
          this._close();
          observer.disconnect();
        }
      }
    });

    observer.observe(this._modal, config);
    this._btnClose.addEventListener('click', this._close.bind(this));
  }
}
export default new AboutView();
