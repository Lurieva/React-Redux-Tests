import * as ACTIONS from './actionTypes';
import moviesApi from './moviesApi';

export const receiveMovies = (payload) => ({
    type: ACTIONS.RECEIVE_MOVIES,
    payload
});

export const receiveMovie = (payload) => ({
    type: ACTIONS.RECEIVE_MOVIE,
    payload
});

export const setSortBy = ({target}) => ({
    type: ACTIONS.SET_SORT_BY,
    payload: target.value
});

export const setSearchBy = ({target}) => ({
    type: ACTIONS.SET_SEARCH_BY,
    payload: target.value
});

export const setFilter = ({target}) => ({
    type: ACTIONS.SET_FILTER,
    payload: target.value
});

export const applyFilter = () => ({
    type: ACTIONS.APPLY_FILTER
});

export function loadMovies() {
    return dispatch => moviesApi.getAllMovies()
        .then(movies => {
            localStorage.setItem('movies', JSON.stringify(movies.data));
            dispatch(receiveMovies(movies.data))
        });
}

export function loadMovie(id) {
    return dispatch => moviesApi.getMovie(id)
        .then(movie => dispatch(receiveMovie(movie)));
}