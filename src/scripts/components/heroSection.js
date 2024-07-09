export class HeroSection extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <section class="hero">
        <div class="wrapper">
          <div class="search">
            <h2 class="search__title">Enter Exercise</h2>
            <form class="search__form" role="search">
              <input
                class="search__input"
                id="searchInput"
                type="text"
                aria-label="Search Workout"
                placeholder="Bench press"
                autocomplete="off"
              />
              <button class="search__btn" id="searchBtn" aria-label="Search">
                <img src="search.svg" alt="" />
              </button>
            </form>
            <div class="slider">
              <img
                class="slider__img"
                src="slider_image_1.webp"
                alt=""
              />
              <img
                class="slider__img"
                src="slider_image_2.webp"
                alt=""
              />
              <img
                class="slider__img"
                src="slider_image_3.webp"
                alt=""
              />
              <img
                class="slider__img"
                src="slider_image_4.webp"
                alt=""
              />
              <img
                class="slider__img"
                src="slider_image_5.webp"
                alt=""
              />
            </div>
          </div>
          <div class="categories">
            <h2 class="categories__title">Choose Category</h2>
            <div class="categories__grid">
              <button class="category" id="chest">
                <p class="category__name">Chest</p>
                <img class="category__img" src="chest.webp" alt="" />
              </button>
              <button class="category" id="back">
                <p class="category__name">Back</p>
                <img class="category__img" src="back.webp" alt="" />
              </button>
              <button class="category" id="shoulders">
                <p class="category__name">Shoulders</p>
                <img
                  class="category__img"
                  src="shoulders.webp"
                  alt=""
                />
              </button>
              <button class="category" id="neck">
                <p class="category__name">Neck</p>
                <img class="category__img" src="neck.webp" alt="" />
              </button>
              <button class="category" id="upper-arms">
                <p class="category__name">Arms</p>
                <img
                  class="category__img"
                  src="upperarms.webp"
                  alt=""
                />
              </button>
              <button class="category" id="lower-arms">
                <p class="category__name">Forearms</p>
                <img
                  class="category__img"
                  src="lowerarms.webp"
                  alt=""
                />
              </button>
              <button class="category" id="upper-legs">
                <p class="category__name">Legs</p>
                <img
                  class="category__img"
                  src="upperlegs.webp"
                  alt=""
                />
              </button>
              <button class="category" id="lower-legs">
                <p class="category__name">Calves</p>
                <img
                  class="category__img"
                  src="lowerlegs.webp"
                  alt=""
                />
              </button>
              <button class="category" id="waist">
                <p class="category__name">Waist</p>
                <img class="category__img" src="waist.webp" alt="" />
              </button>
              <button class="category" id="cardio">
                <p class="category__name">Cardio</p>
                <img
                  class="category__img"
                  src="cardio.webp"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
