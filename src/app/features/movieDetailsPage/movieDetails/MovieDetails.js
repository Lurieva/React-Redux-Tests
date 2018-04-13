import React from 'react';

import './movieDetails.scss';

const MovieDetails = ({ movie }) => {
    const year = new Date(movie.release_date).getFullYear().toString();

    return (
        <div className="movie-details">
            <div className="movie-details__poster">
                <img src={movie.poster_path} 
                    alt={movie.title} />
            </div>
            <div className="movie-details__info">
                <div className="movie-details__info__title">{movie.title}</div>
                <div className="movie-details__info__tagline">{movie.tagline}</div>
                <div className="movie-details__info__year">{year}</div>
                <div className="movie-details__info__overview">{movie.overview}</div>
                <div className="movie-details__info__director">Director: </div>
                <div className="movie-details__info__director">Cast: </div>
            </div>
        </div>
    );
};

export default MovieDetails;