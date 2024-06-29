import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { PUBLIC_ID, SERVICE_ID, TEMPLATE_ID } from '../config';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

class ShareView {
  _body = document.querySelector('body');
  _modal = document.querySelector('.share');
  _overlay = this._modal.querySelector('.modal__overlay');
  _form = document.querySelector('.share__form');
  _email = document.querySelector('#email');
  _btnClose = document.querySelector('#btnCloseShare');
  _btnSend = document.querySelector('#btnSendSchedule');
  _error = document.querySelector('.share__error');
  _isValid;

  addHandlerSubmit(handler) {
    this._form.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }

  async sendSchedule(data) {
    try {
      this._validation();
      if (!this._isValid) {
        this._error.classList.remove('hidden');
        return;
      }

      this._error.classList.add('hidden');
      await this._sendEmail(data);
      this.close();
    } catch (error) {
      console.error(error);
    }
  }

  async _sendEmail(schedule) {
    try {
      let parms = {
        email: this._email.value,
        message: this._generateExerciseList(schedule),
        subject: 'Workout Schedule',
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, parms, {
        publicKey: PUBLIC_ID,
      });
    } catch (error) {
      if (error instanceof EmailJSResponseStatus) {
        console.error('EMAILJS FAILED...', error);
        return;
      }
      console.error(error);
    }
  }

  _generateExerciseList(schedule) {
    return schedule.map(exercise => exercise.name.toUpperCase());
  }

  _validation() {
    this._isValid = false;
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    this._isValid = this._email.value.match(validRegex) ? true : false;
  }

  open() {
    this._modal.showModal();
    disableBodyScroll(this._body);
    this._clear();
    this._observeModal();
    this._btnClose.focus();
  }

  close() {
    this._modal.close();
    this._clear();
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
          this.close();
          observer.disconnect();
        }
      }
    });

    observer.observe(this._modal, config);
    this._btnClose.addEventListener('click', this.close.bind(this));
  }

  startLoading() {
    const markup = `${this._generateLoadingMarkup()}`;
    this._overlay.insertAdjacentHTML('afterbegin', markup);
    this._overlay.style.display = 'block';
    this._modal.setAttribute('inert', '');
  }

  stopLoading() {
    this._overlay.innerHTML = '';
    this._overlay.style.display = 'none';
    this._modal.removeAttribute('inert');
  }

  _generateLoadingMarkup() {
    return `
      <div class="load">
        <svg
          class="load__icon"
          fill="#000000"
          width="50px"
          height="50px"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M18.91.28a1,1,0,0,0-.82.21,1,1,0,0,0-.36.77V5.45a1,1,0,0,0,.75,1,9.91,9.91,0,1,1-5,0,1,1,0,0,0,.75-1V1.26a1,1,0,0,0-.36-.77,1,1,0,0,0-.82-.21,16,16,0,1,0,5.82,0ZM16,30A14,14,0,0,1,12.27,2.51V4.7a11.91,11.91,0,1,0,7.46,0V2.51A14,14,0,0,1,16,30Z"
          ></path>
        </g>
      </svg>
      </div>
    `;
  }

  _clear() {
    this._email.value = '';
    this._isValid = null;
    this._error.classList.add('hidden');
  }
}
export default new ShareView();
