import { customFetch } from './helpers';

class Exercise {
  async getExercise(id) {
    try {
      const response = await customFetch('exercise', id);
      if (!response.ok) throw new Error('Request Error');

      const data = await response.json();
      if (!data) throw new Error('No result');

      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getExercises(endpoint, query) {
    try {
      const response = await customFetch(endpoint, query);
      if (!response.ok) throw new Error('Request Error');

      const data = await response.json();
      if (!data) throw new Error('No result');

      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
export default new Exercise();
