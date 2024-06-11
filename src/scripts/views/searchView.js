import { MIN_INPUT_LENGTH } from '../config';

class SearchView {
  _searchForm = document.querySelector('.search__form');
  _inputElement = document.querySelector('.search__input');
  _categories = document.querySelector('.categories');
  _choosenCategory = '';

  getQuery() {
    const query = this._inputElement.value.toLowerCase().trim();

    this.clearInput();
    return query;
  }

  clearInput() {
    this._inputElement.value = '';
  }

  addHandlerSearch(handler) {
    this._searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

  getCategory() {
    return this._choosenCategory;
  }

  _setCategory(category) {
    this._choosenCategory = category;
  }

  addHandlerSearchCategory(handler) {
    this._categories.addEventListener('click', e => {
      const btn = e.target.closest('.category');
      if (!btn) return;
      this._setCategory(btn.id.replace('-', ' '));
      handler();
    });
  }
}

export default new SearchView();
