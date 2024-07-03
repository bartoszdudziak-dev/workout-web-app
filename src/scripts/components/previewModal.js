export class PreviewModal extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <dialog class="modal preview"></dialog>
    `;
  }
}
