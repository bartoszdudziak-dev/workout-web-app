import View from './View';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

class PreviewView extends View {
  _parentElement = document.querySelector('.preview');
  _results = document.querySelector('.results');
  _body = document.querySelector('body');

  open() {
    this._parentElement.showModal();
    disableBodyScroll(this._body);
  }

  enableCloseEvent() {
    const closeBtn = document.querySelector('#btnClosePreview');
    closeBtn.focus();

    closeBtn.addEventListener('click', e => {
      this._parentElement.close();
      enableBodyScroll(this._body);
    });
  }

  addHandlerClick(handler) {
    ['load', 'hashchange'].forEach(el => window.addEventListener(el, handler));
  }

  _generateMarkup() {
    const exercise = this._data;
    return `
      <h3 class="preview__title">${exercise.name}</h3>
      <img src="${exercise.image}" alt="" class="preview__img" />
      <ul class="preview__instructions">
        ${this._generateInstructions(exercise.instructions)}
      </ul>
      <button class="preview__btn" id="btnClosePreview">
        <img src="/close.svg" alt="" />
      </button>
    `;
  }

  _generateInstructions(instructions) {
    return instructions
      .map(instruction => {
        return `
        <li class="preview__instruction">${instruction}</li>
      `;
      })
      .join('');
  }
}

export default new PreviewView();
