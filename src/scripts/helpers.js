import 'dotenv/config';

export const customFetch = function (endpoint, query) {
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': `${process.env.API_KEY}`,
      'x-rapidapi-host': `${process.env.API_HOST}`,
    },
  };

  return fetch(
    `${process.env.API_URL}${endpoint}/${query}?limit=00&offset=0`,
    options
  );
};
