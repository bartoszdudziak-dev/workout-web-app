import SectionPanelView from './SectionPanelView';

class ScheduleView extends SectionPanelView {
  _parentEl = document.querySelector('.schedule__list');
  _sectionContainer = this._parentEl.parentElement;

  _btnOpen = document.querySelector('#schedule');
  _btnClose = document.querySelector('#btnCloseSchedule');
  _btnClear = document.querySelector('#btnClearSchedule');
  _btnShare = document.querySelector('#btnShareSchedule');
  _btnGenerate = document.querySelector('#btnOpenGenerate');

  _notifications = document.querySelectorAll('.schedule-notification');
  _errorMessage = `Schedule is empty!`;

  constructor() {
    super();
    this.close();
    this._btnClose.addEventListener('click', this.close.bind(this));
    window.addEventListener('resize', this.adjustTopPosition.bind(this));
  }

  // Publisher handler functions
  addHandlerDeleteExercise(handler) {
    this._parentEl.addEventListener('click', e => {
      const btn = e.target.closest('.schedule__delete-btn');
      if (!btn) return;

      const id = this._getExerciseId(btn);

      handler(id);
    });
  }

  addHandlerToggleExerciseStatus(handler) {
    this._parentEl.addEventListener('click', e => {
      const btn = e.target.closest('.schedule__mark-btn');
      if (!btn) return;

      const id = this._getExerciseId(btn);

      btn.classList.toggle('schedule__mark-btn--active');
      handler(id);
    });
  }

  addHandlerClickShare(handler) {
    this._btnShare.addEventListener('click', handler);
  }

  addHandlerClickGenerate(handler) {
    this._btnGenerate.addEventListener('click', handler);
  }

  addHandlerClickReroll(handler) {
    this._parentEl.addEventListener('click', async e => {
      try {
        const btn = e.target.closest('.schedule__reroll-btn');
        if (!btn) return;

        const id = this._getExerciseId(btn);

        btn.classList.add('schedule__reroll-btn--active');
        await handler(id);
        btn.classList.remove('schedule__reroll-btn--active');
      } catch (error) {
        throw error;
      }
    });
  }

  // "Private" methods
  _getExerciseId(button) {
    return button.parentElement.parentElement
      .querySelector('.schedule__exercise')
      .getAttribute('href')
      .slice(1);
  }

  _generateMarkup() {
    const data = this._sortData();
    const markup = data
      .map(category => this._generateCategoryList(category))
      .join('');

    return markup;
  }

  _sortData() {
    // Get unique categories
    const categoriesSet = new Set(this._data.map(el => el.category));

    // Convert categories into object
    const categoriesObj = Object.fromEntries(
      Array.from(categoriesSet, category => [category, []])
    );

    // Sort exercises into their categories
    this._data.forEach(exercise => {
      for (const key of Object.keys(categoriesObj)) {
        if (key === exercise.category) {
          categoriesObj[key].push(exercise);
          break;
        }
      }
    });

    return Object.entries(categoriesObj);
  }

  _generateCategoryList(category) {
    return `
      <ul class="schedule__list-category">
        <li class="schedule__category">${this._generateCategoryName(
          category[0]
        )}</li>
        ${category[1]
          .map(item => {
            return this._generateScheduleItem(item);
          })
          .join(' ')}
      </ul>
    `;
  }

  _generateCategoryName(category) {
    if (category === 'upper legs') return 'legs';
    if (category === 'lower legs') return 'calves';
    if (category === 'upper arms') return 'arms';
    if (category === 'lower arms') return 'forearms';
    return category;
  }

  _generateScheduleItem(item) {
    return `
      <li class="schedule__item">
        <a class="schedule__exercise" href="#${item.id}">${item.name}</a>
        <div class="schedule__exercise-control">
          <button class="schedule-btn schedule__mark-btn ${
            item.done ? 'schedule__mark-btn--active' : ''
          }" aria-label="Toggle done exercise">
            <svg width="100px" height="100px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.192"></g><g id="SVGRepo_iconCarrier"> <path d="M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6" stroke="#d3d4d9ff" stroke-width="2.4" stroke-linecap="round"></path> </g></svg>
          </button>
          <button class="schedule-btn schedule__reroll-btn" aria-label="Reroll exercise">
            <svg fill="#252627ff" width="100px" height="100px" viewBox="0 0 256.00 256.00" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="#252627ff" stroke-width="12.8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M26.76172,105.902c-.18628-.1529-.36426-.31531-.53589-.48413-.01611-.01593-.03394-.02918-.05-.04529-.02051-.02051-.0376-.04321-.05762-.06391-.16357-.16711-.32177-.33941-.47045-.52032-.08277-.10059-.15479-.20648-.23194-.31006-.07861-.10571-.1604-.20862-.23389-.3183-.08081-.12072-.15112-.24591-.22485-.36993-.05932-.1-.12231-.19757-.17749-.30035-.06738-.12592-.12475-.25531-.18481-.384-.05078-.1084-.10523-.21466-.15137-.32568-.05151-.12463-.09326-.25189-.13843-.37848-.04272-.11987-.08911-.238-.12622-.36047-.03857-.12775-.06714-.25757-.09936-.38678-.03077-.124-.06568-.24622-.09082-.37244-.03-.15088-.04834-.30328-.06958-.45544-.01465-.10645-.03541-.21094-.0459-.31867a7.97366,7.97366,0,0,1-.04-.79706V51.71582a8,8,0,0,1,16,0v28.686L60.11719,60.11768a96.10959,96.10959,0,0,1,135.76562,0,8.00018,8.00018,0,1,1-11.31445,11.31347,80.09125,80.09125,0,0,0-113.13672,0L51.147,91.71582H79.833a8,8,0,0,1,0,16h-48c-.26367,0-.5271-.014-.78955-.03992-.11817-.01159-.23267-.03369-.34912-.05035-.14185-.02026-.28394-.03693-.42481-.06482-.13428-.02661-.2644-.06354-.39624-.0968-.12109-.03046-.24267-.057-.3623-.09314-.1294-.03919-.25415-.08765-.38062-.13312-.12012-.043-.24072-.08246-.35889-.13141-.11718-.04858-.22949-.10559-.34375-.15954-.12255-.05762-.24609-.11206-.366-.17627-.10938-.05854-.21314-.12525-.31934-.18866-.11792-.07025-.23706-.13684-.3518-.21369-.11646-.07794-.22584-.16473-.3379-.24847C26.95557,106.047,26.8562,105.97955,26.76172,105.902ZM232.127,155.49225c-.01049-.10773-.03125-.21222-.0459-.31867-.02124-.15216-.03955-.30456-.06958-.45544-.02514-.12622-.06-.24841-.09082-.37244-.03222-.12921-.06079-.259-.09936-.38678-.03711-.12243-.0835-.2406-.12622-.36047-.04517-.12659-.08692-.25385-.13843-.37848-.04614-.111-.10059-.21728-.15137-.32568-.06006-.12866-.11743-.25806-.18481-.384-.05518-.10278-.11817-.20031-.17749-.30035-.07373-.124-.144-.24921-.22485-.36993-.07349-.10968-.15528-.21259-.23389-.3183-.07715-.10358-.14917-.20947-.23194-.31006-.14868-.18091-.30688-.35321-.47045-.52032-.02-.0207-.03711-.0434-.05762-.06391-.01611-.01611-.03394-.02936-.05-.04529-.17163-.16882-.34961-.33123-.53589-.48413-.094-.07715-.19311-.14428-.28955-.21655-.11255-.08423-.22266-.17145-.33984-.24976-.113-.07568-.23047-.14123-.34644-.21051-.10815-.06463-.21411-.1325-.32544-.1922-.1167-.06237-.23681-.11523-.356-.17144-.11767-.05579-.23364-.11444-.35449-.16455-.11377-.047-.22973-.08478-.345-.12629-.1311-.04736-.2605-.09747-.39477-.13806-.11377-.03436-.2295-.05939-.34449-.08862-.13769-.035-.27392-.07337-.4143-.10114-.13037-.02581-.26221-.04077-.39356-.06-.127-.01862-.252-.04236-.38086-.05494-.23193-.02282-.46508-.03271-.69824-.03527-.02978-.00031-.05859-.00446-.08838-.00446h-48a8,8,0,0,0,0,16h28.686l-20.28467,20.28467a80.09125,80.09125,0,0,1-113.13672,0,8.00018,8.00018,0,0,0-11.31445,11.31347,96.11017,96.11017,0,0,0,135.76562,0L216.167,175.59814v28.686a8,8,0,0,0,16,0V156.28931A7.97366,7.97366,0,0,0,232.127,155.49225Z"></path> </g></svg>  
          </button>
          <button
            class="schedule-btn schedule__delete-btn"
            aria-label="Delete exercise"
          >
            <img src="delete.svg" alt="" />
          </button>
        </div>
      </li>
    `;
  }
}
export default new ScheduleView();
