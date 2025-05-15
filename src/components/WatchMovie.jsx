// src/components/WatchMovie.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const WatchMovie = () => {
    const { id } = useParams();
    
    // Logic to get the video URL for the movie
    const videoUrl = `https://path_to_your_movie/${id}`; // Replace with actual logic to get the movie URL

    return (
        <div>
            <h2>Now Playing</h2>
            <iframe
                title="Watch Movie"
                width="100%"
                height="600"
                src={videoUrl} // Use the actual video URL
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default WatchMovie;
