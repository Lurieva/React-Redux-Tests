import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, LogoName } from '../../shared';

import './header.scss';

const Header = ({ isShowSearchBtn, children }) => (
    <header className="header">
        <div className="header__logo">
            <LogoName />
                { 
                    isShowSearchBtn &&  
                    <Button className="header__search-button" 
                            name='Search'
                            onClick={() => window.location = '/'}>
                    </Button>
                }
        </div>
        {children}
    </header> 
);

Header.propTypes = {
    children: PropTypes.element.isRequired
};

export default Header;