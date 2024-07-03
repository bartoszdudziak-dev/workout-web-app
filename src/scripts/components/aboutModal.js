export class AboutModal extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <dialog class="modal about">
        <button
          class="modal__close-btn btn"
          id="btnCloseAbout"
          aria-label="Close about section"
        >
          <img src="close.svg" alt="" />
        </button>
        <div class="about__content">
          <p class="about__title">
            <span>WorkoutApp</span> is a simple frontend project created for
            people interested in workout.
          </p>
          <div class="about__info">
            <span>User is able to:</span>
            <ul class="about__list">
              <li class="about__item">
                Search for a specific exercise by its name
              </li>
              <li class="about__item">
                Search for a group of exercises by selected category
              </li>
              <li class="about__item">
                Check the details of the selected exercise
              </li>
              <li class="about__item">
                Add and remove specific exercise from bookmarks or from the
                their workout schedule
              </li>
              <li class="about__item">
                Generate a random schedule with specific body parts and amount
                of exercises
              </li>
              <li class="about__item">Share their schedule by email</li>
            </ul>
          </div>
          <div class="about__info">
            <span>I built it with:</span>
            <ul class="about__list">
              <li class="about__item">HTML, SCSS and Vanilla JavaScript</li>
              <li class="about__item">Object-Oriented Programming</li>
              <li class="about__item">MVC Architectural Pattern</li>
              <li class="about__item">Publisher - Subscriber Pattern</li>
              <li class="about__item">Parcel Bundler</li>
              <li class="about__item">
                <a href="https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb"
                  >ExerciseDB API</a
                >
              </li>
            </ul>
          </div>
        </div>
      </dialog>
    `;
  }
}
