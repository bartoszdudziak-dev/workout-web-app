export class ResultsSection extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <section class="results wrapper hidden">
        <h3 class="results__title">Search Results</h3>
        <ul class="results__list"></ul>
        <div class="pagination"></div>
      </section>
    `;
  }
}
