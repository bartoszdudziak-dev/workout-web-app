import SectionPanelView from './SectionPanelView';

class BookmarksView extends SectionPanelView {
  _parentEl = document.querySelector('.bookmarks__list');
  _sectionContainer = this._parentEl.parentElement;

  _btnOpen = document.querySelector('#bookmarks');
  _btnClose = document.querySelector('#btnCloseBookmarks');
  _btnClear = document.querySelector('#btnClearBookmarks');

  _notifications = document.querySelectorAll('.bookmarks-notification');
  _errorMessage = `You don't have any bookmarks!`;

  constructor() {
    super();
    this.close();
    this._btnClose.addEventListener('click', this.close.bind(this));
    window.addEventListener('resize', this.adjustTopPosition.bind(this));
  }

  // Publisher handler functions
  addHandlerDeleteBookmark(handler) {
    this._parentEl.addEventListener('click', e => {
      const bookmark = e.target.closest('.bookmark__delete-btn');
      if (!bookmark) return;

      const id = this._getExerciseId(bookmark);

      handler(id);
    });
  }

  // "Private" methods
  _getExerciseId(button) {
    return button.parentElement.parentElement
      .querySelector('.bookmark')
      .getAttribute('href')
      .slice(1);
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
}
export default new BookmarksView();
