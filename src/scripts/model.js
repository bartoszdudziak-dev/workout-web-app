import { RESULTS_PER_PAGE, AJAX } from './config';
// import data from './test.json'; // TESTING

export const state = {
  exercise: '',
  search: {
    query: '',
    queryType: '',
    results: [],
    resultsPerPage: RESULTS_PER_PAGE,
    page: 1,
  },
  bookmarks: [],
  schedule: [],
};

export const loadSearchResults = async function (queryType, query) {
  try {
    state.search.queryType = queryType;
    state.search.query = query;

    const response = await AJAX(queryType, query);

    if (!response.ok) throw new Error('Request Error');

    const result = await response.json();
    if (!result) throw new Error('No result');

    state.search.results = result.map(exercise => {
      return {
        id: exercise.id,
        name: exercise.name,
        category: exercise.bodyPart,
        muscles: exercise.secondaryMuscles,
      };
    });

    state.search.page = 1;
  } catch (error) {
    console.error(error);
  }
};

export const loadExercise = async function (id) {
  try {
    const response = await AJAX('exercise', id);
    if (!response.ok) throw new Error('Request Error');

    const result = await response.json();
    if (!result) throw new Error('No result');

    state.exercise = {
      id: result.id,
      name: result.name,
      instructions: result.instructions,
      image: result.gifUrl,
    };

    // Check if the exercise is added to bookmakrs
    if (state.bookmarks.some(bookmark => bookmark.id === id)) {
      state.exercise.bookmarked = true;
    } else {
      state.exercise.bookmarked = false;
    }
    // Check if the exercise is added to schedule
    if (state.schedule.some(exercise => exercise.id === id)) {
      state.exercise.scheduled = true;
    } else {
      state.exercise.scheduled = false;
    }
  } catch (error) {
    console.error(error);
  }
};

// Generate schedule with randomly choosen exercises for each category
export const generateSchedule = async function (schedule) {
  try {
    const newSchedule = [];
    const uniqueIdSet = new Set();
    for await (const element of schedule) {
      const response = await AJAX('bodyPart', element.category);
      if (!response.ok) throw new Error('Request error');

      const result = await response.json();
      if (!result) throw new Error('No result');

      for (let i = 0; i < element.exercises; i++) {
        // Leave loop when there is no more exercises in received data
        // e.g Neck category has only two exercises
        if (i === result.length) return;
        let id;
        let randomNumber;
        do {
          // Get random index in range of recived results
          randomNumber = Math.floor(Math.random() * result.length);
          // Id of randomly choosen exercise
          id = result[randomNumber].id;

          // Repeat operation if the choosen was already picked
        } while (uniqueIdSet.has(id));
        uniqueIdSet.add(id);
        newSchedule.push(result[randomNumber]);
      }
    }

    // Update schedule
    clearSchedule();
    state.schedule = [...newSchedule];
    updateLocalStorage('schedule', state.schedule);
  } catch (error) {
    console.error(error);
  }
};

// Get the data with specific range
export const getSearchResults = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
};

// Add specific exercise to bookmarks
export const addBookmark = function (exercise) {
  state.bookmarks.push(exercise);
  state.exercise.bookmarked = true;
  updateLocalStorage('bookmarks', state.bookmarks);
};

// Remove specific exercise from bookmarks
export const deleteBookmark = function (id) {
  const index = state.bookmarks.findIndex(bookmark => bookmark.id === id);
  state.bookmarks.splice(index, 1);
  state.exercise.bookmarked = false;
  updateLocalStorage('bookmarks', state.bookmarks);
};

// Remove all the bookmarks from Local Storage
export const clearBookmarks = function () {
  if (state.bookmarks.length === 0) return;
  state.bookmarks.splice(0, state.bookmarks.length);
  localStorage.removeItem('bookmarks');
};

// Add specific exercise to schedule
export const addExercise = function (exercise) {
  state.schedule.push(exercise);
  state.exercise.scheduled = true;
  updateLocalStorage('schedule', state.schedule);
};

// Remove exercise from schedule
export const deleteExercise = function (id) {
  const index = state.schedule.findIndex(exercise => exercise.id === id);
  state.schedule.splice(index, 1);
  state.exercise.scheduled = false;
  updateLocalStorage('schedule', state.schedule);
};

// Clear whole schedule from Local Storage
export const clearSchedule = function () {
  if (state.schedule.length === 0) return;
  state.schedule.splice(0, state.schedule.length);
  localStorage.removeItem('schedule');
};

// Local storage control
const updateLocalStorage = function (itemKey, itemValue) {
  localStorage.setItem(itemKey, JSON.stringify(itemValue));
};

// Load data from Local Storage
const loadLocalStorage = () => {
  const bookmarks = localStorage.getItem('bookmarks');
  if (bookmarks) state.bookmarks = JSON.parse(bookmarks);

  const schedule = localStorage.getItem('schedule');
  if (schedule) state.schedule = JSON.parse(schedule);
};

// Init on the start
const init = () => {
  loadLocalStorage();
};
init();
