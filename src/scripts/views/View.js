export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0)) return;

    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }
}
