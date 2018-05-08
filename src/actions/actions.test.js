import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from './actions';
import * as types from './actionTypes';
import localStorageApi from './localStorageApi';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
    const movieMock = {
        id: 1,
        title: 'title_1'
    };
    const moviesMock = [movieMock];

    beforeEach(() => {
        localStorage.clear();
        jest.resetAllMocks();
    });

    it('should create an action to receive movies', () => {
        const expectedAction = {
            type: types.RECEIVE_MOVIES,
            payload: moviesMock
        };

        expect(actions.receiveMovies(moviesMock)).toEqual(expectedAction)
    });

    it('should create an action to receive movie', () => {
        const expectedAction = {
            type: types.RECEIVE_MOVIE,
            payload: movieMock
        };

        expect(actions.receiveMovie(movieMock)).toEqual(expectedAction)
    });

    it('should create an action to set sortBy', () => {
        const value = 'rating';
        const payload = {
            target: {
                value
            }
        };
        const expectedAction = {
            type: types.SET_SORT_BY,
            payload: value
        };

        expect(actions.setSortBy(payload)).toEqual(expectedAction)
    });

    it('should create an action to set searchBy', () => {
        const value = 'title';
        const payload = {
            target: {
                value
            }
        };
        const expectedAction = {
            type: types.SET_SEARCH_BY,
            payload: value
        };

        expect(actions.setSearchBy(payload)).toEqual(expectedAction)
    });

    it('should create an action to set filter', () => {
        const value = 'filter';
        const payload = {
            target: {
                value
            }
        };
        const expectedAction = {
            type: types.SET_FILTER,
            payload: value
        };

        expect(actions.setFilter(payload)).toEqual(expectedAction)
    });

    it('should create an action to apply filter', () => {
        const expectedAction = {
            type: types.APPLY_FILTER,
        };

        expect(actions.applyFilter()).toEqual(expectedAction)
    });

    describe('loading movies', () => {
        beforeEach(() => {
            global.fetch = jest.fn().mockImplementation(() => {
                const p = new Promise((resolve, reject) => {
                    resolve({
                        ok: true, 
                        json: () => { 
                            return {
                                data: moviesMock
                            };
                        }
                    });
                });
                
                return p;
            });
        });

        it('creates an action to receive movies when fetching movies has been done', () => {
            const KEY = 'movies';
            const expectedAction = {
                type: types.RECEIVE_MOVIES,
                payload: moviesMock
            };

            const store = mockStore({ movies: [] });
   
            return store.dispatch(actions.loadMovies()).then(() => {
                expect(global.fetch).toHaveBeenCalledWith('http://react-cdp-api.herokuapp.com/movies');
                expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, JSON.stringify(moviesMock));
                expect(actions.receiveMovies(moviesMock)).toEqual(expectedAction);
            });
        });
    
        it('creates an action to receive movies when movies are in localStorage', () => {
            const KEY = 'movies';
            const expectedAction = {
                type: types.RECEIVE_MOVIES,
                payload: moviesMock
            };
    
            const store = mockStore({ movies: [] });
    
            localStorage.setItem(KEY, JSON.stringify(moviesMock));
            store.dispatch(actions.loadMovies());
    
            expect(actions.receiveMovies(moviesMock)).toEqual(expectedAction);
        });
    });

    describe('loading movie', () => {
        beforeEach(() => {
            global.fetch = jest.fn().mockImplementation(() => {
                const p = new Promise((resolve, reject) => {
                    resolve({
                        ok: true, 
                        json: () => movieMock
                    });
                });
                
                return p;
            });
        });

        it('creates an action to receive movie when fetching movie has been done', () => {
            const id = 3;
            const expectedAction = {
                type: types.RECEIVE_MOVIE,
                payload: movieMock 
            };
    
            const store = mockStore({ movie: {} });
    
            return store.dispatch(actions.loadMovie(id)).then(() => {
                expect(actions.receiveMovie(movieMock)).toEqual(expectedAction);
                expect(global.fetch).toHaveBeenCalledWith('http://react-cdp-api.herokuapp.com/movies/3');
            });
        });
    });
});