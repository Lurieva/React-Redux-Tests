import React from 'react';
import { shallow } from 'enzyme';
import MoviesPage from './MoviesPage';

jest.mock('../../components/filter/Filter', () => 'Filter');
jest.mock('../../components/header/Header', () => 'Header');
jest.mock('../../components/footer/Footer', () => 'Footer');
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
            date: '13-01-2018',
            id: 2, 
            title: 'title_2'
        }, {
            date: '12-01-2018', 
            id: 1, 
            title: 'title_1'
        }];

        const result = tree.instance().sortArray(moviesMock, 'date');
        expect(result).toEqual(expectedResult);
    });

    it('should set movies in state', () => {
        tree.instance().fetchMovies();
        expect(tree.state().movies).toEqual(moviesMock);
    });
});
