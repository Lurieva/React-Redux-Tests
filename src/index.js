import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './rootReducer';

import App from './app/App';

import 'bootstrap/dist/css/bootstrap.css';

import ErrorBoundary from './app/ErrorBoundary';

const store = createStore(rootReducer)

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </Provider>
    </AppContainer>,
    document.getElementById('root')
);
