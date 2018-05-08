import React from 'react';
import PropTypes from 'prop-types';

import './MoviesInfoPanel.scss';

const MoviesInfoPanel = ({ count, children }) => (
    <div className="moviesInfoPanel">
        <div className="moviesInfoPanel__count">
            { count === 0 && <span></span> }
            { count === 1 && <span>{count} movie found</span> }
            { count > 1 && <span>{count} movies found</span> }
        </div>
        <div className="moviewInfoPanel__sortBy">
            { children }
        </div>
    </div>
);

MoviesInfoPanel.propTypes = {
    count: PropTypes.number,
    children: PropTypes.element
};

export default MoviesInfoPanel;