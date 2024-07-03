export class BookmarksSection extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <section class="bookmarks" data-open="false">
        <div class="bookmarks__control">
          <button
            class="bookmarks__clear-btn btn"
            id="btnClearBookmarks"
            aria-label="Clear bookmarks"
          >
            <img src="clear.svg" alt="" />
          </button>
          <button
            class="bookmarks__close-btn btn"
            id="btnCloseBookmarks"
            aria-label="Close bookmarks"
          >
            <img src="close.svg" alt="" />
          </button>
        </div>
        <span class="bookmarks__title">
          <span
            >Bookmarks<span class="bookmarks-notification hidden"></span
          ></span>
        </span>
        <ul class="bookmarks__list"></ul>
      </section>
    `;
  }
}
