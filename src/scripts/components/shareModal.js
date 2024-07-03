export class ShareModal extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <dialog class="modal share" formmethod="dialog">
        <div class="modal__overlay"></div>
        <button
          class="modal__close-btn btn"
          id="btnCloseShare"
          aria-label="Close share contanier"
        >
          <img src="close.svg" alt="" />
        </button>
        <form class="share__form" novalidate>
          <div class="share__input-control">
            <label for="email" class="share__label">Email</label>
            <input
              class="share__input"
              id="email"
              type="email"
              name="email"
              placeholder="example@gmail.com"
              autocomplete="email"
            />
            <span class="share__error hidden">Invalid email</span>
          </div>
          <button
            class="share__submit-btn"
            type="submit"
            id="btnSendSchedule"
          >
            Share by email <img src="send.svg" alt="" />
          </button>
        </form>
      </dialog> 
    `;
  }
}
