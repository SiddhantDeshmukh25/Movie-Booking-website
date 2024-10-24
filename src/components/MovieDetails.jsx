// src/components/MovieDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/movieService'; // Ensure you have this function

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const getMovieDetails = async () => {
            const movieDetails = await fetchMovieDetails(id);
            setMovie(movieDetails);
        };

        getMovieDetails();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>; // Show loading state while fetching
    }

    return (
        <div>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
        </div>
    );
};

export default MovieDetails;
