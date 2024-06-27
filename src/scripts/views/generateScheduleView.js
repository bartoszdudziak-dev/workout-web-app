import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { MAX_EXERCISES_PER_CATEGORY } from '../config';

class GenerateScheduleView {
  _body = document.querySelector('body');
  _modal = document.querySelector('.generate');
  _overlay = this._modal.querySelector('.modal__overlay');
  _form = document.querySelector('.generate__form');
  _btnClose = document.querySelector('#btnCloseGenerate');
  _checkboxElements = document.querySelectorAll('.generate__checkbox');
  _inputElements = document.querySelectorAll('.generate__input');
  _error = document.querySelector('.generate__error');
  _isValid;
  _data = [];

  constructor() {
    this._resetForm();
    this._checkboxElements.forEach(checkbox => {
      checkbox.addEventListener('change', e => {
        this.changeCheckboxHandler(e);
      });
    });
  }

  addHandlerSubmit(handler) {
    this._form.addEventListener('submit', e => {
      e.preventDefault();
      this._resetError();
      this._validation();
      if (!this._isValid) return;
      handler();
    });
  }

  changeCheckboxHandler(e) {
    const box = e.target;
    const inputElement = box.parentElement.querySelector('.generate__input');

    box.checked
      ? this._enableInput(inputElement)
      : this._disableInput(inputElement);
  }

  open() {
    this._modal.showModal();
    disableBodyScroll(this._body);
    this._btnClose.focus();
    this._resetForm();
    this._observeModal();
  }

  close() {
    this._modal.close();
    enableBodyScroll(this._body);
  }

  _validation() {
    this._isValid = false;
    const data = [];
    const pickedElements = Array.from(this._checkboxElements).filter(
      checkbox => checkbox.checked
    );

    // Check if any category was not picked
    if (
      !pickedElements ||
      (Array.isArray(pickedElements) && pickedElements.length === 0)
    ) {
      this._setError('At least one category required!');
      return;
    }

    pickedElements.forEach(element => {
      data.push({
        category: element.id.split('-').slice(0, -1).join(' '),
        exercises:
          +element.parentElement.querySelector('.generate__input').value,
      });
    });

    // Check input values
    if (
      data.some(
        element =>
          !element.exercises || element.exercises > MAX_EXERCISES_PER_CATEGORY
      )
    ) {
      this._setError(
        `Exercises must be between 1-${MAX_EXERCISES_PER_CATEGORY}`
      );
      return;
    }

    this._isValid = true;
    this._data = data;
  }

  getData() {
    return this._data;
  }

  _disableInput(input) {
    input.setAttribute('disabled', '');
    input.value = '';
  }

  _enableInput(input) {
    input.removeAttribute('disabled');
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

  _resetForm() {
    this._checkboxElements.forEach(checkbox => (checkbox.checked = false));
    this._inputElements.forEach(input => {
      input.setAttribute('disabled', '');
      input.value = '';
    });
    this._isValid = null;
    this._error.classList.add('hidden');
    this._data.splice(1, this._data.length);
  }

  _setError(message) {
    this._error.textContent = message;
    this._error.classList.remove('hidden');
  }

  _resetError() {
    this._error.textContent = '';
    this._error.classList.add('hidden');
  }

  // Loading spinner
  startLoading() {
    const markup = `${this._generateLoadingMarkup()}`;
    this._resetForm();
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
}
export default new GenerateScheduleView();
