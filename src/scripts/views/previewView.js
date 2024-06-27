import View from './View';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

class PreviewView extends View {
  _parentEl = document.querySelector('.preview');
  _results = document.querySelector('.results');
  _body = document.querySelector('body');

  open() {
    this._parentEl.showModal();
    disableBodyScroll(this._body);
  }

  _closeModal() {
    // Close modal
    this._parentEl.close();

    // Clear hash in url
    history.pushState(null, null, '#');

    enableBodyScroll(this._body);
  }

  observePreview() {
    const closeBtn = document.querySelector('#btnClosePreview');
    closeBtn.focus();

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
          this._closeModal();
          observer.disconnect();
        }
      }
    });

    observer.observe(this._parentEl, config);
    closeBtn.addEventListener('click', () => {
      this._parentEl.setAttribute('open', false);
    });
  }

  addHandlerClick(handler) {
    ['load', 'hashchange'].forEach(el => window.addEventListener(el, handler));
  }

  addHandlerBookmarkState(handler) {
    this._parentEl.addEventListener('click', e => {
      const btn = e.target.closest('.bookmark__toggle-btn');
      if (!btn) return;
      handler();
      btn.classList.toggle('bookmark__toggle-btn--active');
    });
  }

  addHandlerScheduleExerciseState(handler) {
    this._parentEl.addEventListener('click', e => {
      const btn = e.target.closest('.schedule__toggle-btn');
      if (!btn) return;
      handler();
      btn.classList.toggle('schedule__toggle-btn--active');
    });
  }

  _generateMarkup() {
    const exercise = this._data;
    return `
      <h3 class="preview__title">${exercise.name}</h3>
      <div class="preview__img-container">
          ${this._generateLoadingMarkup()}
          <img src="${exercise.image}" alt="" class="preview__img hidden" />
      </div>
      <div class="preview__control">
        <button class="preview__control-btn bookmark__toggle-btn ${
          exercise.bookmarked ? 'bookmark__toggle-btn--active' : ''
        }" id="btnToggleBookmark" aria-label="Add bookmark">
          <svg  viewBox="-6 -3 36.00 36.00" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>bookmark</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-419.000000, -153.000000)" fill="#000000"> <path d="M437,153 L423,153 C420.791,153 419,154.791 419,157 L419,179 C419,181.209 420.791,183 423,183 L430,176 L437,183 C439.209,183 441,181.209 441,179 L441,157 C441,154.791 439.209,153 437,153" id="bookmark" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
        </button>
        <button class="preview__control-btn schedule__toggle-btn ${
          exercise.scheduled ? 'schedule__toggle-btn--active' : ''
        }" id="btnToggleSchedule" aria-label="Add to schedule">
          <svg width="100px" height="100px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="4" y="10" width="40" height="30" rx="2" fill="#d3d4d9ff" stroke="#252627ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></rect> <path d="M14 6V14" stroke="#252627ff" stroke-width="4" stroke-linecap="round"></path> <path d="M25 23L14 23" stroke="white" stroke-width="4" stroke-linecap="round"></path> <path d="M34 31L14 31" stroke="white" stroke-width="4" stroke-linecap="round"></path> <path d="M34 6V14" stroke="#252627ff" stroke-width="4" stroke-linecap="round"></path> </g></svg>
        </button>
      </div>
      <ul class="preview__instructions">
        ${this._generateInstructions(exercise.instructions)}
      </ul>
      <button class="modal__close-btn btn" id="btnClosePreview">
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

  loadImg() {
    const img = document.querySelector('.preview__img');
    const spinner = document
      .querySelector('.preview__img-container')
      .querySelector('.load');

    img.addEventListener('load', () => {
      spinner.remove();
      img.classList.remove('hidden');
    });
  }
}

export default new PreviewView();
