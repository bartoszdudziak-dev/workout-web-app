import View from './View';
import { getHeaderHeight } from '../features/layout';

class ScheduleView extends View {
  _parentEl = document.querySelector('.schedule__list');
  _scheduleContainer = this._parentEl.parentElement;
  _btnOpen = document.querySelector('#schedule');
  _btnClose = document.querySelector('#btnCloseSchedule');
  _btnClear = document.querySelector('#btnClearSchedule');
  _btnShare = document.querySelector('#btnShareSchedule');
  _btnGenerate = document.querySelector('#btnOpenGenerate');
  _notifications = document.querySelectorAll('.schedule-notification');
  _errorMessage = `Schedule is empty!`;

  constructor() {
    super();
    this._btnClose.addEventListener('click', this.close.bind(this));
    this._scheduleContainer.setAttribute('inert', '');
    window.addEventListener('resize', this._adjustTopPosition.bind(this));
  }

  addHandlerClick(handler) {
    this._btnOpen.addEventListener('click', e => {
      this._adjustTopPosition();
      e.preventDefault();
      this.open();
      handler();
    });
  }

  addHandlerDeleteExercise(handler) {
    this._parentEl.addEventListener('click', e => {
      const exercise = e.target.closest('.schedule__delete-btn');
      if (!exercise) return;

      const id = exercise.parentElement
        .querySelector('.schedule__exercise')
        .getAttribute('href')
        .slice(1);

      handler(id);
    });
  }

  addHandlerClearSchedule(handler) {
    this._btnClear.addEventListener('click', handler);
  }

  updateScheduleNotification(counter) {
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

  addHandlerClickShare(handler) {
    this._btnShare.addEventListener('click', handler);
  }

  addHandlerClickGenerate(handler) {
    this._btnGenerate.addEventListener('click', handler);
  }

  open() {
    this._scheduleContainer.setAttribute('data-open', 'true');
    this._scheduleContainer.removeAttribute('inert', '');
    this._btnClose.focus();
  }

  close() {
    this._scheduleContainer.setAttribute('data-open', 'false');
    this._scheduleContainer.setAttribute('inert', '');
  }

  _generateMarkup() {
    const markup = this._data
      .map(exercise => this._generateScheduleItem(exercise))
      .join('');
    return markup;
  }

  _generateScheduleItem(item) {
    return `
      <li class="schedule__item">
        <a class="schedule__exercise" href="#${item.id}">${item.name}</a
        ><button
          class="schedule__delete-btn"
          aria-label="Delete exercise"
        >
          <img src="delete.svg" alt="" />
        </button>
      </li>
    `;
  }

  _adjustTopPosition() {
    this._scheduleContainer.style.top = getHeaderHeight() + 'px';
  }
}
export default new ScheduleView();
