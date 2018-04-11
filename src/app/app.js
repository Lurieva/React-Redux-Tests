import React, { Fragment } from 'react';

import '../styles/normalize.css';
import './app.scss';

import ComponentFirst from './componentFirst';
import ComponentSecond from './componentSecond';
import ComponentThird from './componentThird';
import ComponentFourth from './componentFourth';

const App = () => (
    <Fragment>
        <label>React.createElement</label>
        <ComponentFirst />
        <hr/>
        <label>Functional components</label>
        <ComponentSecond />
        <hr/>
        <label>React.Component</label>
        <ComponentThird />
        <hr/>
        <label>React.PureComponent</label>
        <ComponentFourth />
    </Fragment>
);

export default App;