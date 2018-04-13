import React from 'react';

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

export default MainLayout;