import React from 'react';
import { shallow, mount } from 'enzyme';
import { connect } from 'react-redux';
import MoviesPage,  { mapStateToProps, mapDispatchToProps } from './MoviesPage';

jest.mock('../../components/filter/Filter', () => 'Filter');
jest.mock('../../components/header/Header', () => 'Header');
jest.mock('../../components/infoPanel/InfoPanel', () => 'InfoPanel');
jest.mock('../../components/movies/Movies', () => 'Movies');
jest.mock('../../components/sortBy/SortBy', () => 'SortBy');
jest.mock('./moviesInfoPanel/MoviesInfoPanel', () => 'MoviesInfoPanel');

xdescribe('MoviesPage', () => {
    let tree;
    const props = {
        movies: [],
        searchBy: 'searchBy',
        sortBy: 'sortBy',
        filter: 'filter',
    };

    const mapDispatchToProps = {
        receiveMovies: () => {},
        applyFilter: () => {},
        setSearchBy: () => {},
        setSortBy: () => {},
        setFilter: () => {},
        loadMovies: () => {}
    };

    beforeEach(() => {
        wrapper = mount(<MoviesPage {...props} />)
    });

    it('should be defined', () => {
        expect(MoviesPage).toBeDefined();
    });
});
