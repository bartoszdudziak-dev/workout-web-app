import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { PUBLIC_ID, SERVICE_ID, TEMPLATE_ID } from '../config';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

class ShareView {
  _body = document.querySelector('body');
  _modal = document.querySelector('.share');
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
        console.log('EMAILJS FAILED...', error);
        return;
      }
      console.error(error);
    }
  }

  _generateExerciseList(schedule) {
    console.log(schedule);
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

  _clear() {
    this._email.value = '';
    this._isValid = null;
    this._error.classList.add('hidden');
  }
}
export default new ShareView();
