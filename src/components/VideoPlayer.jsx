import React from 'react';
import './VideoPlayer.css'; // Import your CSS for styling

const VideoPlayer = ({ videoKey, onClose }) => {
    return (
        <div className="video-player">
            <div className="video-player__overlay" onClick={onClose}></div>
            <div className="video-player__content">
                <button className="video-player__close" onClick={onClose}>X</button>
                <iframe
                    title="Trailer"
                    width="560"
                    height="30"
                    src={`https://www.youtube.com/embed/${videoKey}`}
                
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default VideoPlayer;
