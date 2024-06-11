import { RESULTS_PER_PAGE, AJAX } from './config';

export const state = {
  exercise: '',
  search: {
    query: '',
    queryType: '',
    results: [],
    resultsPerPage: RESULTS_PER_PAGE,
    page: 1,
  },
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
  } catch (error) {
    console.error(error);
  }
};

export const loadExercise = async function (id) {
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
};

export const getSearchResults = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
};
