const KEY = '1fb3cfcb88msh3d2dcc170b2011dp1c3673jsnea756b40e2ca';
const HOST = 'exercisedb.p.rapidapi.com';

export const API_URL = 'https://exercisedb.p.rapidapi.com/exercises/';
export const FETCH_OPTIONS = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': `${KEY}`,
    'x-rapidapi-host': `${HOST}`,
  },
};

export const AJAX = function (queryType, query) {
  return fetch(
    `${API_URL}${queryType}/${query}?limit=00&offset=0`,
    FETCH_OPTIONS
  );
};

export const MESSAGE_TIMEOUT = 2000;
export const SLIDER_DELAY = 6000;
export const SCROLL_DELAY = 100;
export const MAX_WIDTH_MOBILE_NAV = 576;
export const RESULTS_PER_PAGE = 8;
export const MAX_MUSCLES_LENGTH = 3;
export const MIN_INPUT_LENGTH = 3;
export const MAX_EXERCISES_PER_CATEGORY = 10;

// Email
export const PUBLIC_ID = 'bIfOnC8SgrKo-rICL';
export const SERVICE_ID = 'service_xjhe275';
export const TEMPLATE_ID = 'template_s355ixo';
