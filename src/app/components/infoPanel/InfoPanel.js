import React from 'react';
import PropTypes from 'prop-types';

import './infoPanel.scss';

const InfoPanel = ({ children }) => (
    <div className="infoPanel">
        {children}
    </div> 
);

InfoPanel.propTypes = {
    children: PropTypes.element.isRequired
};

export default InfoPanel;