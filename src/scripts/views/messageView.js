import { MESSAGE_TIMEOUT } from '../config';

class MessageView {
  #messageEl = document.querySelector('.message');
  #messageTimeout;

  displaySuccessMessage(message = 'Success') {
    this.#displayMessage(message);
    this.#messageEl.classList.remove('warning');
    this.#messageEl.classList.add('success');
  }

  displayErrorMessage(message = 'Something went wrong') {
    this.#displayMessage(message);
    this.#messageEl.classList.remove('success');
    this.#messageEl.classList.add('warning');
  }

  #displayMessage(message) {
    clearTimeout(this.#messageTimeout);
    this.#messageEl.textContent = message;
    this.#messageEl.classList.remove('hidden');

    setTimeout(() => {
      this.#messageEl.classList.add('hidden');
    }, MESSAGE_TIMEOUT);
  }
}
export default new MessageView();
