class SearchView {
  _searchForm = document.querySelector('.search__form');
  _inputElement = document.querySelector('.search__input');
  _categories = document.querySelector('.categories');
  _choosenCategory = '';

  // Searching by Name
  getQuery() {
    const query = this._inputElement.value.toLowerCase().trim();
    this.clearInput();
    return query;
  }

  clearInput() {
    this._inputElement.value = '';
  }

  addHandlerSearch(handler) {
    this._searchForm.addEventListener('submit', e => {
      e.preventDefault();
      this._unsetCategory();
      handler();
    });
  }

  // Searching by Category
  getCategory() {
    return this._choosenCategory;
  }

  _setCategory(categoryElement) {
    categoryElement.classList.add('category--active');
    this._choosenCategory = categoryElement.id.replace('-', ' ');
  }

  _unsetCategory() {
    const categoryBtns = document.querySelectorAll('.category');
    categoryBtns.forEach(btn => btn.classList.remove('category--active'));
    this._choosenCategory = null;
  }

  addHandlerSearchCategory(handler) {
    this._categories.addEventListener('click', e => {
      const btn = e.target.closest('.category');
      if (!btn || btn.classList.contains('category--active')) return;
      this._unsetCategory();
      this._setCategory(btn);
      handler();
    });
  }
}

export default new SearchView();
