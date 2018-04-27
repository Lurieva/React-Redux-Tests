import React from 'react';
import PropTypes from 'prop-types';

import './genresInfo.scss';

const GenresInfo = ({ genres }) => {
    const genresInfo = genres ? genres.join(' & ') : null;

    return (
        <div className="genresInfo">
            { genresInfo && <span>Films by {genresInfo}</span>}
        </div>
    );
};

GenresInfo.propTypes = {
    genres: PropTypes.array
};

export default GenresInfo;