import View from './View';
import { getHeaderHeight } from '../features/layout';

class BookmarksView extends View {
  _parentEl = document.querySelector('.bookmarks__list');
  _bookmarksContainer = this._parentEl.parentElement;
  _btnOpen = document.querySelector('#bookmarks');
  _btnClose = document.querySelector('#btnCloseBookmarks');
  _btnClear = document.querySelector('#btnClearBookmarks');
  _notifications = document.querySelectorAll('.bookmarks-notification');
  _errorMessage = `You don't have any bookmarks!`;

  constructor() {
    super();
    this._btnClose.addEventListener('click', this.close.bind(this));
    this._bookmarksContainer.setAttribute('inert', '');
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

  addHandlerDeleteBookmark(handler) {
    this._parentEl.addEventListener('click', e => {
      const bookmark = e.target.closest('.bookmark__delete-btn');
      if (!bookmark) return;

      const id = bookmark.parentElement
        .querySelector('.bookmark')
        .getAttribute('href')
        .slice(1);

      handler(id);
    });
  }

  addHandlerClearBookmarks(handler) {
    this._btnClear.addEventListener('click', handler);
  }

  updateBookmarkNotification(counter) {
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

  open() {
    this._bookmarksContainer.setAttribute('data-open', 'true');
    this._bookmarksContainer.removeAttribute('inert', '');
    this._btnClose.focus();
  }

  close() {
    this._bookmarksContainer.setAttribute('data-open', 'false');
    this._bookmarksContainer.setAttribute('inert', '');
  }

  _generateMarkup() {
    const markup = this._data
      .map(exercise => this._generateBookmarkItem(exercise))
      .join('');
    return markup;
  }

  _generateBookmarkItem(item) {
    return `
      <li class="bookmarks__item">
        <a class="bookmark" href="#${item.id}">${item.name}</a
        ><button
          class="bookmark__delete-btn"
          aria-label="Delete bookmark"
        >
          <img src="delete.svg" alt="" />
        </button>
      </li>
    `;
  }

  _adjustTopPosition() {
    this._bookmarksContainer.style.top = getHeaderHeight() + 'px';
  }
}
export default new BookmarksView();
