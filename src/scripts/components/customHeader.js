export class CustomHeader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <header class="header">
        <div class="wrapper">
          <h1 class="header__title">Workout<span>App</span></h1>
          <nav class="nav">
            <span id="nav__label" hidden>Navigation</span>
            <button
              id="btnOpen"
              class="nav__btn nav__btn--open"
              aria-expanded="false"
              aria-labelledby="nav__label"
            >
              <img src="hamburger.svg" alt="" />
            </button>
            <div
              class="nav__menu"
              id="navMenu"
              role="dialog"
              aria-labelledby="nav__label"
            >
              <span class="nav__label" hidden>Navigation</span>
              <button
                id="btnClose"
                class="nav__btn nav__btn--close"
                aria-label="Close"
              >
                <img src="close.svg" alt="" />
              </button>
              <ul class="nav__list">
                <li class="nav__item">
                  <a class="nav__link" href="">Home</a>
                </li>
                <li class="nav__item nav__item-bookmarks">
                  <a
                    class="nav__link"
                    aria-label="Open bookmarks"
                    id="bookmarks"
                    href=""
                    >Bookmarks</a
                  >
                  <span class="bookmarks-notification hidden"></span>
                </li>
                <li class="nav__item nav__item-schedule">
                  <a
                    class="nav__link"
                    id="schedule"
                    aria-label="Open schedule"
                    href=""
                    >Schedule</a
                  >
                  <span class="schedule-notification hidden"></span>
                </li>
                <li class="nav__item">
                  <a class="nav__link" id="about" href="">About</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    `;
  }
}
