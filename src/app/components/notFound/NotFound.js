import React from 'react';

import './notFound.scss';

import { Button } from '../../shared';

const NotFound = () => (
    <div className="notFound">
        <div className="notFound__content">
            <div className="notFound__content__title">Page doesn`t Found</div>
            <Button className="notFound__content__backBtn"
                    name='Back to Main Page'
                    onClick={() => window.location = '/'}>
            </Button>
        </div>
    </div> 
);

export default NotFound;