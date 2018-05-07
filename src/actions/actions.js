import * as ACTIONS from './actionTypes';

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
