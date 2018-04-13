import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './movie.scss';

const Movie = ({ movie }) => {
    const year = new Date(movie.release_date).getFullYear();
    const genres = (movie.genres).join(' & ');

    return (
        <div className="movie">
            <div className="movie__content">
                <img className="movie__content__poster" 
                    src={movie.poster_path} 
                    alt={movie.title} />
                <div className="movie__content__info">
                    <Link className="movie__content__info__title" 
                          to={`/movies/${movie.id}`}>
                          {movie.title}
                    </Link>
                    <div className="movie__content__info__year">{year}</div>
                </div>
                <div className="movie__content__genres">{genres}</div>
            </div>
        </div>
    );
};

export default Movie;