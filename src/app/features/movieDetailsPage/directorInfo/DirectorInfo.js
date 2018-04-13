import React from 'react';

import './directorInfo.scss';

const DirectorInfo = ({ director, count }) => (
    <div className="directorInfo">
        { count === 0 && <span></span> }
        { count === 1 && <span>Film by {director}</span> }
        { count > 1 && <span>Films by {director}</span> }  
    </div>
);

export default DirectorInfo;