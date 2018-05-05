import React, { Fragment } from 'react';
import { AppContainer } from 'react-hot-loader';

import { Router, Route, Switch, Redirect } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import ExampleBoundary from './ErrorBoundary'

const history = createBrowserHistory();

import '../styles/normalize.css';

import './app.scss';

import { MoviesPage, MovieDetailsPage } from './features';
import { MainLayout, NotFound } from './components';

const App = () => {
    return (    
        <MainLayout>
            <Router history={history}>
                <Switch>
                    <Route path='/'
                           exact={true}
                           render={() => <Redirect to='/movies'/>} 
                    />
                    <Route
                        exact={true}
                        component={MoviesPage}
                        path='/movies'
                    />
                    <Route
                        exact={true}
                        component={MovieDetailsPage}
                        path='/movies/:movieId'
                    />
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        </MainLayout>
    )
}

export default App;