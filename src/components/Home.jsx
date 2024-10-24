// src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import { fetchPopularMovies, searchMovies } from '../services/movieService';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ searchQuery }) => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const fetchedMovies = await fetchPopularMovies();
            setMovies(fetchedMovies);
            setFilteredMovies(fetchedMovies); // Set initial filtered movies
        };

        getMovies();
    }, []);

    useEffect(() => {
        const filterMovies = async () => {
            if (searchQuery) {
                const searchResults = await searchMovies(searchQuery);
                setFilteredMovies(searchResults);
            } else {
                setFilteredMovies(movies);
            }
        };

        filterMovies();
    }, [searchQuery, movies]);

    return (
        <div className="home">
            <h2>Welcome to the Home Page!</h2>
            <div className="featured-movies">
                <h3>Featured Movies</h3>
                <div className="movie-list">
                    {filteredMovies.map((movie) => (
                        <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <h4>{movie.title}</h4>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
