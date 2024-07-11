import { RESULTS_PER_PAGE } from './config';
import Exercise from './Exercise';

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

    const data =
      state.search.queryType === 'bodyPart'
        ? await Exercise.getExercisesByCategory(query)
        : await Exercise.getExercisesByName(query);

    state.search.results = data.map(exercise => {
      return {
        id: exercise.id,
        name: exercise.name,
        category: exercise.bodyPart,
        muscles: exercise.secondaryMuscles,
      };
    });

    state.search.page = 1;
  } catch (error) {
    throw error;
  }
};

export const loadExercise = async function (id) {
  try {
    const data = await Exercise.getExercise(id);

    state.exercise = {
      id: data.id,
      name: data.name,
      category: data.bodyPart,
      instructions: data.instructions,
      image: data.gifUrl,
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
      const result = await Exercise.getExercisesByCategory(element.category);

      for (let i = 0; i < element.exercises; i++) {
        // Leave loop when there is no more exercises in received data
        // e.g Neck category has only two exercises
        if (i === result.length) break;
        let id;
        let randomNumber;
        do {
          // Get random index in range of recived results
          randomNumber = Math.floor(Math.random() * result.length);
          // Id of randomly choosen exercise
          id = result[randomNumber].id;

          // Repeat operation if the choosen was already picked
        } while (uniqueIdSet.has(id));
        const exercise = result[randomNumber];
        newSchedule.push({
          id: exercise.id,
          name: exercise.name,
          category: exercise.bodyPart,
          done: false,
        });
        uniqueIdSet.add(id);
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

export const rerollExercise = async function (pickedId) {
  try {
    const uniqueIdSet = new Set(state.schedule.map(el => el.id));
    const pickedExercise = state.schedule.find(el => el.id === pickedId);
    const pickedIndex = state.schedule.findIndex(el => el.id === pickedId);

    // Length of exercises with same category as choosen one
    const categoryCounter = state.schedule.reduce(
      (accumulator, currentItem) => {
        if (currentItem.category === pickedExercise.category) accumulator++;
        return accumulator;
      },
      0
    );

    const result = await Exercise.getExercisesByCategory(
      pickedExercise.category
    );

    let id;
    let randomNumber;
    do {
      // Escape if there is no more exercises with given category
      if (categoryCounter === result.length)
        throw new Error('No more exercises with this category');

      // Get random index in range of recived results
      randomNumber = Math.floor(Math.random() * result.length);

      // Id of randomly choosen exercise
      id = result[randomNumber].id;

      // Repeat operation if the choosen was already picked
    } while (uniqueIdSet.has(id));

    const newExercise = {
      id: result[randomNumber].id,
      name: result[randomNumber].name,
      category: result[randomNumber].bodyPart,
      done: false,
    };

    // Replace picked exercise by randomly choosen one
    state.schedule.splice(pickedIndex, 1, newExercise);

    updateLocalStorage('schedule', state.schedule);
  } catch (error) {
    throw error;
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
  state.schedule.push({
    id: exercise.id,
    name: exercise.name,
    category: exercise.category,
    done: false,
  });
  state.exercise.scheduled = true;
  updateLocalStorage('schedule', state.schedule);
};

export const toggleMarkExercise = function (id) {
  const exercise = state.schedule.find(el => el.id === id);
  if (!exercise.done) exercise.done = true;
  else exercise.done = false;

  updateLocalStorage('schedule', state.schedule);
};

// Remove exercise from schedule
export const deleteExercise = function (id) {
  const index = state.schedule.findIndex(exercise => exercise.id === id);
  state.schedule.splice(index, 1);
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
