// src/components/MovieDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMovieDetails, fetchMovieVideos } from '../services/movieService'; // Ensure you have these functions

const MovieDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [trailerKey, setTrailerKey] = useState(null); // State to hold the trailer key

    useEffect(() => {
        const getMovieDetails = async () => {
            const movieDetails = await fetchMovieDetails(id);
            setMovie(movieDetails);

            // Fetch the trailer for the movie
            const videos = await fetchMovieVideos(id);
            const trailer = videos.find(video => video.type === 'Trailer');
            if (trailer) {
                setTrailerKey(trailer.key);
            }
        };

        getMovieDetails();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>; // Show loading state while fetching
    }

    const handleWatchMovie = () => {
        // Navigate to the movie playback URL
        // Here you should replace `movie.playbackUrl` with the actual link to the movie
        // For example, if you have a specific video URL:
        navigate(`/watch/${id}`); // This assumes you have a route set up for watching movies
    };

    return (
        <div>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>

            {trailerKey && (
                <div>
                    <h3>Watch the Trailer:</h3>
                    <iframe
                        title="Trailer"
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${trailerKey}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            )}

            {/* Added Movie Watch Button */}
            <div style={{ marginTop: '20px' }}>
                <h3>Options</h3>
                <button onClick={handleWatchMovie}>Watch Movie</button>
            </div>
        </div>
    );
};

export default MovieDetails;
