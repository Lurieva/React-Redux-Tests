import React from 'react';
import { shallow } from 'enzyme';
import MoviesPage,  { mapStateToProps, mapDispatchToProps } from './MoviesPage';

jest.mock('../../components/filter/Filter', () => 'Filter');
jest.mock('../../components/header/Header', () => 'Header');
jest.mock('../../components/infoPanel/InfoPanel', () => 'InfoPanel');
jest.mock('../../components/movies/Movies', () => 'Movies');
jest.mock('../../components/sortBy/SortBy', () => 'SortBy');
jest.mock('./moviesInfoPanel/MoviesInfoPanel', () => 'MoviesInfoPanel');

xdescribe('MoviesPage', () => {
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
        expect(tree.instance().render).toBeDefined();
    });

    it('should call fetch with params', () => {
        tree.instance().props = {
            movies: []
        };
        
        tree.instance().componentDidMount();

        expect(global.fetch).toHaveBeenCalledWith('http://react-cdp-api.herokuapp.com/movies');
    }); 

    it('should call fetch with params', () => {
        tree.instance().fetchMovies();

        expect(global.fetch).toHaveBeenCalledWith('http://react-cdp-api.herokuapp.com/movies');
    });
});
