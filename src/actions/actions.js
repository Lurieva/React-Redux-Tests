import * as ACTIONS from './actionTypes';
import { BASE_URL } from '../app/app.config';

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
    const KEY = 'movies';
    const cachedMovies = localStorage.getItem(KEY);

    if (cachedMovies) {
        return dispatch => dispatch(receiveMovies(cachedMovies));
    } else {
        return dispatch => fetch(`${BASE_URL}movies`)
            .then(res => res.json())
            .then(movies => {
                localStorage.setItem(KEY, movies.data);
                dispatch(receiveMovies(movies.data));
            });
    }
}

export function loadMovie(movieId) {
    return dispatch => fetch(`${BASE_URL}movies/${movieId}`)
        .then((res) => res.json())
        .then(movie => dispatch(receiveMovie(movie)));
}
