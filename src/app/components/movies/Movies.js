import React from 'react';
import PropTypes from 'prop-types';

import Movie from './movie/Movie';
import NoFilmsFound from '../noFilmsFound/NoFilmsFound';

import './movies.scss';

const Movies = ({ movies }) => (
    <div className="movies-container">
        {
            movies.length ? movies.map((movie) => (               
                <Movie key={movie.id} movie={movie}/>
            )) : <NoFilmsFound />
        }
    </div>
);

Movies.propTypes = {
    movies: PropTypes.array
};

export default Movies;