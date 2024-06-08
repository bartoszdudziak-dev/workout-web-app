import { MIN_INPUT_LENGTH } from '../config';

class SearchViewByName {
  _parentElement = document.querySelector('.search__form');
  _inputElement = document.querySelector('.search__input');

  getQuery() {
    const query = this._inputElement.value.toLowerCase().trim();
    if (query.length <= MIN_INPUT_LENGTH) return null;

    this.clearInput();
    return query;
  }

  clearInput() {
    this._inputElement.value = '';
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchViewByName();
