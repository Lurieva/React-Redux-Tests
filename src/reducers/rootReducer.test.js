import React from 'react';
import rootReducer from './rootReducer';
import { SEARCH_BY, SORT_BY } from '../app/app.config';
import * as ACTIONS from '../actions/actionTypes';

describe('rootReducer', () => {
    const stateMock = {
        movies: [],
        movie: {},
        searchBy: SEARCH_BY.TITLE.value,
        filter: '',
        sortBy: SORT_BY.RELEASE_DATE.value,
        appliedFilter: null
    };

    it('should return the initial state', () => {
        expect(rootReducer(stateMock, {})).toEqual(stateMock);
    });

    it('should handle RECEIVE_MOVIES', () => {
        const moviesMock = [{
            id: 1,
            title: 'title'
        }];
        const receiveMoviesAction = {
            type: ACTIONS.RECEIVE_MOVIES,
            payload: moviesMock
        };

        expect(rootReducer({}, receiveMoviesAction)).toEqual({
            movies: moviesMock
        });
    });

    it('should handle RECEIVE_MOVIE', () => {
        const movieMock = {
            id: 1,
            title: 'title'
        };
        const receiveMovieAction = {
            type: ACTIONS.RECEIVE_MOVIE,
            payload: movieMock
        };

        expect(rootReducer({}, receiveMovieAction)).toEqual({
            movie: movieMock
        });
    });

    it('should handle SET_SEARCH_BY', () => {
        const searchBy = 'searchBy';
        const setSearchByAction = {
            type: ACTIONS.SET_SEARCH_BY,
            payload: searchBy
        };

        expect(rootReducer({}, setSearchByAction)).toEqual({ searchBy });
    });

    it('should handle SET_SORT_BY', () => {
        const sortBy = 'sortBy';
        const setSortByAction = {
            type: ACTIONS.SET_SORT_BY,
            payload: sortBy
        };

        expect(rootReducer({}, setSortByAction)).toEqual({ sortBy });
    });

    it('should handle SET_FILTER', () => {
        const filter = 'filter';
        const setFilterAction = {
            type: ACTIONS.SET_FILTER,
            payload: filter
        };

        expect(rootReducer({}, setFilterAction)).toEqual({ filter });
    });
});