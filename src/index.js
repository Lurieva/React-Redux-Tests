import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

import App from './app/App';

import 'bootstrap/dist/css/bootstrap.css';

import ErrorBoundary from './app/ErrorBoundary';

const store = createStore(rootReducer, applyMiddleware(thunk));

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
