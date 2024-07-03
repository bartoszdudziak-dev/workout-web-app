export class GenerateModal extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <dialog class="modal generate" formmethod="dialog">
        <div class="modal__overlay"></div>
        <span class="generate__title">
          Select categories<span
            >and number of exercises for each of them</span
          >
        </span>
        <span class="generate__error hidden"></span>
        <button
          class="modal__close-btn btn"
          id="btnCloseGenerate"
          aria-label="Close generate schedule form"
        >
          <img src="close.svg" alt="" />
        </button>

        <form class="generate__form" novalidate>
          <div class="generate__inputs">
            <div class="generate__input-control">
              <label class="generate__label" for="chest-checkbox"
                >Chest</label
              >
              <input
                class="generate__checkbox"
                type="checkbox"
                id="chest-checkbox"
              />
              <input
                class="generate__input"
                type="number"
                aria-label="Number of exercises"
                id="chest-number"
                placeholder="0"
                min="0"
                max="10"
                disabled
              />
            </div>
            <div class="generate__input-control">
              <label class="generate__label" for="back-checkbox">Back</label>
              <input
                class="generate__checkbox"
                type="checkbox"
                id="back-checkbox"
              />
              <input
                class="generate__input"
                type="number"
                aria-label="Number of exercises"
                id="back-number"
                placeholder="0"
                min="0"
                max="10"
              />
            </div>
            <div class="generate__input-control">
              <label class="generate__label" for="shoulders-checkbox"
                >Shoulders</label
              >
              <input
                class="generate__checkbox"
                type="checkbox"
                id="shoulders-checkbox"
              />
              <input
                class="generate__input"
                type="number"
                aria-label="Number of exercises"
                id="shoulders-number"
                placeholder="0"
                min="0"
                max="10"
              />
            </div>
            <div class="generate__input-control">
              <label class="generate__label" for="neck-checkbox">Neck</label>
              <input
                class="generate__checkbox"
                type="checkbox"
                id="neck-checkbox"
              />
              <input
                class="generate__input"
                type="number"
                aria-label="Number of exercises"
                id="neck-number"
                placeholder="0"
                min="0"
                max="2"
              />
            </div>
            <div class="generate__input-control">
              <label class="generate__label" for="upper-arms-checkbox"
                >Arms</label
              >
              <input
                class="generate__checkbox"
                type="checkbox"
                id="upper-arms-checkbox"
              />
              <input
                class="generate__input"
                type="number"
                aria-label="Number of exercises"
                id="upper-arms-number"
                placeholder="0"
                min="0"
                max="10"
              />
            </div>
            <div class="generate__input-control">
              <label class="generate__label" for="lower-arms-checkbox"
                >Forearms</label
              >
              <input
                class="generate__checkbox"
                type="checkbox"
                id="lower-arms-checkbox"
              />
              <input
                class="generate__input"
                type="number"
                aria-label="Number of exercises"
                id="lower-arms-number"
                placeholder="0"
                min="0"
                max="10"
              />
            </div>
            <div class="generate__input-control">
              <label class="generate__label" for="upper-legs-checkbox"
                >Legs</label
              >
              <input
                class="generate__checkbox"
                type="checkbox"
                id="upper-legs-checkbox"
              />
              <input
                class="generate__input"
                type="number"
                aria-label="Number of exercises"
                id="upper-legs-number"
                placeholder="0"
                min="0"
                max="10"
              />
            </div>
            <div class="generate__input-control">
              <label class="generate__label" for="lower-legs-checkbox"
                >Calves</label
              >
              <input
                class="generate__checkbox"
                type="checkbox"
                id="lower-legs-checkbox"
              />
              <input
                class="generate__input"
                type="number"
                aria-label="Number of exercises"
                id="lower-legs-number"
                placeholder="0"
                min="0"
                max="10"
              />
            </div>
            <div class="generate__input-control">
              <label class="generate__label" for="waist-checkbox"
                >Waist</label
              >
              <input
                class="generate__checkbox"
                type="checkbox"
                id="waist-checkbox"
              />
              <input
                class="generate__input"
                type="number"
                aria-label="Number of exercises"
                id="waist-number"
                placeholder="0"
                min="0"
                max="10"
              />
            </div>
            <div class="generate__input-control">
              <label class="generate__label" for="cardio-checkbox"
                >Cardio</label
              >
              <input
                class="generate__checkbox"
                type="checkbox"
                id="cardio-checkbox"
              />
              <input
                class="generate__input"
                type="number"
                aria-label="Number of exercises"
                id="cardio-number"
                placeholder="0"
                min="0"
                max="10"
              />
            </div>
          </div>
          <button
            class="generate__submit-btn"
            type="submit"
            id="btnGenerateSchedule"
          >
            Generate schedule
          </button>
        </form>
    </dialog> 
    `;
  }
}
