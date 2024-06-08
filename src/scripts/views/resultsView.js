import View from './View';
import { scrollIntoViewWithOffset } from '../features/layout';

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
        <button class="exercise exercise-btn">
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
        </button>
      </li>
    `;
  }

  _generateMuscles(muscles) {
    return `
        ${muscles
          .filter((_, i) => i < 3)
          .map(muscle => {
            return `<li><span class="exercise__muscle">${muscle}</span></li>`;
          })
          .join('')}
      `;
  }

  scrollToResults() {
    scrollIntoViewWithOffset(this._parentElement.parentElement);
  }
}

export default new ResultsView();
