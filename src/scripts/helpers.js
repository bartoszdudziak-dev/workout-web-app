import 'dotenv/config';

export const customFetch = function (url, query) {
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': `${process.env.API_KEY}`,
      'x-rapidapi-host': `${process.env.API_HOST}`,
    },
  };

  return fetch(`${url}${query}?limit=00&offset=0`, options);
};
