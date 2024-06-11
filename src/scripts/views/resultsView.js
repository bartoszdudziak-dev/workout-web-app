import View from './View';
import { MAX_MUSCLES_LENGTH } from '../config';
import { getHeaderHeight } from '../features/layout';
import { SCROLL_TIMEOUT } from '../config';

class ResultsView extends View {
  _parentElement = document.querySelector('.results__list');

  _generateMarkup() {
    return this._data
      .map(element => this._generateSingleElement(element))
      .join('');
  }

  _generateSingleElement(exercise) {
    return `
      <li>
        <a class="exercise exercise-btn" href="#${exercise.id}">
          <img
            class="exercise__category-img"
            src="/${exercise.category.replace(' ', '')}.png"
            alt=""
          />
          <span class="exercise__name">${exercise.name}</span>
          <ul class="exercise__muscles">
            <li><span class="exercise__category">${
              exercise.category
            }</span></li>
            ${this._generateMuscles(exercise.muscles)}
          </ul>
        </a>
      </li>
    `;
  }

  _generateMuscles(muscles) {
    return `
        ${muscles
          .filter((_, i) => i < MAX_MUSCLES_LENGTH)
          .map(muscle => {
            return `<li><span class="exercise__muscle">${muscle}</span></li>`;
          })
          .join('')}
      `;
  }

  scrollToView() {
    const sectionY =
      this._parentElement.parentElement.getBoundingClientRect().top;
    const offset = getHeaderHeight();

    setTimeout(() => {
      window.scrollTo({
        top: sectionY + window.scrollY - offset,
        behavior: 'smooth',
      });
    }, SCROLL_TIMEOUT);
  }

  displaySection() {
    this._parentElement.parentElement.classList.remove('hidden');
  }
}

export default new ResultsView();
