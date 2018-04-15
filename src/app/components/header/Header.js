import React, { Component } from 'react';

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

export default Header;