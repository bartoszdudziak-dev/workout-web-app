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
export const RESULTS_PER_PAGE = 5;
