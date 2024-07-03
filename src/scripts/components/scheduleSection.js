export class ScheduleSection extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <section class="schedule" data-open="false">
        <div class="schedule__control">
          <button
            class="schedule__generate-btn btn"
            id="btnOpenGenerate"
            aria-label="Generate schedule"
          >
            <img src="generate.svg" alt="" />
          </button>
          <button
            class="schedule__share-btn btn"
            id="btnShareSchedule"
            aria-label="Share schedule"
          >
            <img src="share.svg" alt="" />
          </button>

          <button
            class="schedule__clear-btn btn"
            id="btnClearSchedule"
            aria-label="Clear schedule"
          >
            <img src="clear.svg" alt="" />
          </button>
          <button
            class="schedule__close-btn btn"
            id="btnCloseSchedule"
            aria-label="Close schedule"
          >
            <img src="close.svg" alt="" />
          </button>
        </div>
        <span class="schedule__title">
          <span
            >Schedule<span class="schedule-notification hidden"></span
          ></span>
        </span>
        <ul class="schedule__list"></ul>
      </section>
    `;
  }
}
