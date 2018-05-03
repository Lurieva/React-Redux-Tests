import * as ACTIONS from './actionTypes';

export const receiveMovies = (payload) => ({
    type: ACTIONS.RECEIVE_MOVIES,
    payload
});

export const receiveMovie = (payload) => ({
    type: ACTIONS.RECEIVE_MOVIE,
    payload
});

export const setSortBy = (payload) => ({
    type: ACTIONS.SET_SORT_BY,
    payload
});

export const setSearchBy = (payload) => ({
    type: ACTIONS.SET_SEARCH_BY,
    payload
});

export const setFilter = (payload) => ({
    type: ACTIONS.SET_FILTER,
    payload
});

export const applyFilter = () => ({
    type: ACTIONS.APPLY_FILTER
});
