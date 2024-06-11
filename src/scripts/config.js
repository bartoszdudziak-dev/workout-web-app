export const API_URL = 'https://exercisedb.p.rapidapi.com/exercises/';
const KEY = 'f0e37b386fmsh09db0af793419e4p14105djsn8406c6b774e1';
const HOST = 'exercisedb.p.rapidapi.com';
export const FETCH_OPTIONS = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': `${KEY}`,
    'x-rapidapi-host': `${HOST}`,
  },
};
export const MIN_INPUT_LENGTH = 3;
export const RESULTS_PER_PAGE = 10;
export const MAX_MUSCLES_LENGTH = 3;
export const SCROLL_TIMEOUT = 100;

export const AJAX = function (queryType, query) {
  return fetch(
    `${API_URL}${queryType}/${query}?limit=00&offset=0`,
    FETCH_OPTIONS
  );
};
