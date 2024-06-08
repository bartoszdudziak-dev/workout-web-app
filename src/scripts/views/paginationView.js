import View from './View';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  curPage;
  numPages;

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.pagination__btn');
      if (!btn) return;

      const goToPage = +btn.getAttribute('data-goto');
      handler(goToPage);
    });
  }

  _generateMarkup() {
    // Compute number of pages for current search query
    this.curPage = this._data.page;
    this.numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // First page and there are more
    if (this.curPage === 1 && this.numPages > 1) {
      return `
        ${this._generatePageNumber()}
        ${this._generateNextButton()}
      `;
    }

    // Last page
    if (this.curPage === this.numPages && this.numPages > 1) {
      return `
        ${this._generatePreviousButton()}
        ${this._generatePageNumber()}
      `;
    }

    // Other page
    if (this.curPage < this.numPages) {
      return `
        ${this._generatePreviousButton()}
        ${this._generatePageNumber()}
        ${this._generateNextButton()}
      `;
    }

    // First page and no other pages
    return `
      ${this._generatePageNumber()}
    `;
  }

  _generatePageNumber() {
    return `
    <div class="pagination__current-page" aria-label="Current page">
      <span class="current-page">${this.curPage}</span>
      <span>/</span>
      <span class="number-of-pages">${this.numPages}</span>
    </div>
  `;
  }

  _generateNextButton() {
    return `
    <button class="pagination__btn" id="nextPageBtn" data-goto="${
      this.curPage + 1
    }" aria-label="Next page">
      <img src="/next.svg" alt="" />
    </button>
  `;
  }

  _generatePreviousButton() {
    return `
    <button
      class="pagination__btn" id="previousPageBtn" data-goto="${
        this.curPage - 1
      }" aria-label="Previous page"> 
      <img src="/previous.svg" alt="" />
    </button>
  `;
  }
}

export default new PaginationView();
