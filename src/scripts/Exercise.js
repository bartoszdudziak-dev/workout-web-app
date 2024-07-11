import 'dotenv/config';
import { customFetch } from './helpers';

class Exercise {
  async getExercise(id) {
    try {
      const url = `${process.env.API_URL}/exercise/`;

      const response = await customFetch(url, id);
      if (!response.ok) throw new Error('Request Error');

      const data = await response.json();
      if (!data) throw new Error('No result');

      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getExercisesByName(query) {
    try {
      const url = `${process.env.API_URL}/name/`;

      const response = await customFetch(url, query);
      if (!response.ok) throw new Error('Request Error');

      const data = await response.json();
      if (!data) throw new Error('No result');

      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getExercisesByCategory(query) {
    try {
      const url = `${process.env.API_URL}/bodyPart/`;

      const response = await customFetch(url, query);
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
