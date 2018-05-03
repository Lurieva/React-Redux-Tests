import React from 'react';
import { shallow } from 'enzyme';
import MoviesPage from './MoviesPage';

jest.mock('../../components/filter/Filter', () => 'Filter');
jest.mock('../../components/header/Header', () => 'Header');
jest.mock('../../components/infoPanel/InfoPanel', () => 'InfoPanel');
jest.mock('../../components/movies/Movies', () => 'Movies');
jest.mock('../../components/sortBy/SortBy', () => 'SortBy');
jest.mock('./moviesInfoPanel/MoviesInfoPanel', () => 'MoviesInfoPanel');

describe('MoviesPage', () => {
    let tree;
    const mockFn = jest.fn();
    const value = 'value';
    const moviesMock = [
        {
            id: 1,
            title: 'title_1',
            date: '12-01-2018'
        }, {
            id: 2,
            title: 'title_2',
            date: '13-01-2018'
        }
    ];
    const eventMock = {
        target: { value }
    };

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

    beforeEach(() => {
        tree = shallow(<MoviesPage />);
    });

    it('should be defined', () => {
        expect(MoviesPage).toBeDefined();
    });

    it('should render correctly ', () => {
        expect(tree).toMatchSnapshot();
    });

    it('should match interface', () => {
        expect(tree.instance().componentDidMount).toBeDefined();
        expect(tree.instance().fetchMovies).toBeDefined();
        expect(tree.instance().applyFilter).toBeDefined();
        expect(tree.instance().setSearchBy).toBeDefined();
        expect(tree.instance().setFilter).toBeDefined();
        expect(tree.instance().setSortBy).toBeDefined();
        expect(tree.instance().sortArray).toBeDefined();
        expect(tree.instance().getFilteredMovies).toBeDefined();
        expect(tree.instance().getFilteredAndSortMovies).toBeDefined();
        expect(tree.instance().render).toBeDefined();
    });

    it('should set sortBy in state', () => {
        tree.instance().setSortBy(eventMock);
        expect(tree.state().sortBy).toEqual(value);
    });

    it('should set filter in state', () => {
        tree.instance().setFilter(eventMock);
        expect(tree.state().filter).toEqual(value);
    });

    it('should set searchBy in state', () => {
        tree.instance().setSearchBy(eventMock);
        expect(tree.state().searchBy).toEqual(value);
    });

    it('should sort array', () => {
        const expectedResult = [{
            date: '12-01-2018', 
            id: 1, 
            title: 'title_1'
        }, {
            date: '13-01-2018',
            id: 2, 
            title: 'title_2'
        }];

        const result = tree.instance().sortArray(moviesMock, 'date');
        expect(result).toEqual(expectedResult);
    });

    it('should set movies in state', () => {
        tree.instance().fetchMovies();
        expect(tree.state().movies).toEqual(moviesMock);
    });

    it('should return movies if search field is array', () => {
        const movies = [{
            id: 1,
            title: 'title_1',
            genre: ['drama']
        }];


        const result = tree.instance().getFilteredMovies(movies, 'genre', 'dra');
        expect(result).toEqual(movies);
    });

    it('should return movies if search field is string', () => {
        const movies = [{
            id: 1,
            title: 'title_1',
            genre: 'drama'
        }];


        const result = tree.instance().getFilteredMovies(movies, 'genre', 'dra');
        expect(result).toEqual(movies);
    });

    it('should return movies after sort if sortBy = vote_average', () => {
        const movies = [{
            id: 1,
            title: 'title_1',
            genre: 'drama',
            vote_average: 1
        }, {
            id: 2,
            title: 'title_2',
            genre: 'drama',
            vote_average: 2
        }];

        const expectedResult = [{
            id: 2,
            title: 'title_2',
            genre: 'drama',
            vote_average: 2
        }, {
            id: 1,
            title: 'title_1',
            genre: 'drama',
            vote_average: 1
        }];

        const result = tree.instance().sortArray(movies, 'vote_average');
        expect(result).toEqual(expectedResult);
    });

    it('should return movies after sort if sortBy = release_date', () => {
        const movies = [{
            id: 1,
            title: 'title_1',
            genre: 'drama',
            release_date: '12-01-2018'
        }, {
            id: 2,
            title: 'title_2',
            genre: 'drama',
            release_date: '13-01-2018'
        }];

        const expectedResult = [...movies];

        const result = tree.instance().sortArray(movies, 'release_date');
        expect(result).toEqual(expectedResult);
    });
});
