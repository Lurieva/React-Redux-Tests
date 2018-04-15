import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './app/App';

import 'bootstrap/dist/css/bootstrap.css';

import ErrorBoundary from './app/ErrorBoundary';

ReactDOM.render(
    <AppContainer>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </AppContainer>,
    document.getElementById('root')
);
