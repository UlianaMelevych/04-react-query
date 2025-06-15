
import axios from 'axios';
import type { MovieApiResponse } from '../types/movie';

const API_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = 'import.meta.env.VITE_TMDB_TOKEN';
export const fetchMovies = async (
  query: string,
  page: number
): Promise<MovieApiResponse> => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        query,
        page,
      },
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    console.log('Fetched data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};
