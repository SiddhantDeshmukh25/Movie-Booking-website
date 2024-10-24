// src/services/movieService.js
import axios from 'axios';

const API_KEY = '4e4d012d6e1d50b1ac79947a5745ac04'; // Your TMDb API key
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        return response.data.results; // Return the list of movies
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error; // Throw the error for further handling
    }
};

export const searchMovies = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
        return response.data.results; // Return the search results
    } catch (error) {
        console.error('Error searching movies:', error);
        throw error; // Throw the error for further handling
    }
};
export const fetchMovieDetails = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
        return response.data; // Return the movie details
    } catch (error) {
        console.error('Error fetching movie details:', error);
        throw error; // Handle the error appropriately
    }
};
