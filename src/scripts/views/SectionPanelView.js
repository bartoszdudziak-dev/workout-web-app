import View from './View';
import { getHeaderHeight } from '../features/layout';

export default class SectionPanelView extends View {
  // Resuable Publisher handler functions
  addHandlerOpenSection(handler) {
    this._btnOpen.addEventListener('click', e => {
      e.preventDefault();
      this.adjustTopPosition();
      this.open();
      handler();
    });
  }

  addHandlerClear(handler) {
    this._btnClear.addEventListener('click', handler);
  }

  // Reusable functions for new SectionsPanelViews
  open() {
    this._sectionContainer.setAttribute('data-open', 'true');
    this._sectionContainer.removeAttribute('inert');
    this._btnClose.focus();
  }

  close() {
    this._sectionContainer.setAttribute('data-open', 'false');
    this._sectionContainer.setAttribute('inert', '');
  }

  updateNotification(counter) {
    this._notifications.forEach(notifcation => {
      if (counter === 0) {
        notifcation.classList.add('hidden');
        notifcation.textContent = '';
      } else {
        notifcation.classList.remove('hidden');
        notifcation.textContent = counter;
      }
    });
  }

  adjustTopPosition() {
    this._sectionContainer.style.top = getHeaderHeight() + 'px';
  }
}
