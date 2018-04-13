import React from 'react';

import './infoPanel.scss';

const InfoPanel = ({ children }) => (
    <div className="infoPanel">
        {children}
    </div> 
);

export default InfoPanel;