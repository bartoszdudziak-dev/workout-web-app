export default class View {
  _data;
  _errorMessage = 'Something went wrong!';

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return this._renderError();
    }

    this._data = data;
    this._clear();
    const markup = this._generateMarkup();
    this._parentEl.insertAdjacentHTML('beforeend', markup);
  }

  _clear() {
    this._parentEl.innerHTML = '';
  }

  _renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <img class="error-icon" src="/error.svg" alt=""/>
        <p class="error-message">${message}</p>
      </div>
    `;
    this._clear();
    this._parentEl.insertAdjacentHTML('beforeend', markup);
  }

  // Loading spinner
  loading() {
    const markup = `${this._generateLoadingMarkup()}`;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  _generateLoadingMarkup() {
    return `
      <div class="load">
        <svg
          class="load__icon"
          fill="#000000"
          width="50px"
          height="50px"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M18.91.28a1,1,0,0,0-.82.21,1,1,0,0,0-.36.77V5.45a1,1,0,0,0,.75,1,9.91,9.91,0,1,1-5,0,1,1,0,0,0,.75-1V1.26a1,1,0,0,0-.36-.77,1,1,0,0,0-.82-.21,16,16,0,1,0,5.82,0ZM16,30A14,14,0,0,1,12.27,2.51V4.7a11.91,11.91,0,1,0,7.46,0V2.51A14,14,0,0,1,16,30Z"
          ></path>
        </g>
      </svg>
      </div>
    `;
  }
}
