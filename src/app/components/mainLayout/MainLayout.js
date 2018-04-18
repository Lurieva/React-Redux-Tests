import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../footer/Footer';

import './mainLayout.scss';

const MainLayout = ({ children }) => (
    <div className="main-layout">
        <div className="main-layout__content">
            {children}
        </div>
        <Footer />
    </div>
);

MainLayout.propTypes = {
    children: PropTypes.element.isRequired
};

export default MainLayout;