import React from 'react';
import { shallow } from 'enzyme';
import MovieDetailsPage from './MovieDetailsPage';

jest.mock('../../components/header/Header', () => 'Header');
jest.mock('../../components/infoPanel/InfoPanel', () => 'InfoPanel');
jest.mock('../../components/movies/Movies', () => 'Movies');
jest.mock('../../components/sortBy/SortBy', () => 'SortBy');
jest.mock('./movieDetails/MovieDetails', () => 'MovieDetails');
jest.mock('./genresInfo/GenresInfo', () => 'GenresInfo');

describe('MovieDetailsPage', () => {
    let tree;
    let matchMock = {
        params: {
            movieId: 2
        }
    };
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
        tree = shallow(<MovieDetailsPage match={matchMock}/>);
    });

    it('should be defined', () => {
        expect(MovieDetailsPage).toBeDefined();
    });

    it('should render correctly ', () => {
        expect(tree).toMatchSnapshot();
    });

    it('should match interface', () => {
        expect(tree.instance().componentDidMount).toBeDefined();
        expect(tree.instance().componentWillReceiveProps).toBeDefined();
        expect(tree.instance().getMovies).toBeDefined();
        expect(tree.instance().getMovieDetail).toBeDefined();
        expect(tree.instance().render).toBeDefined();
    });

    it('should call fetch when component did mount', () => {
        tree.instance().props = {
            match: {
                params: {
                    movieId: 2
                }
            }
        };
        tree.instance().componentDidMount();

        expect(global.fetch).toHaveBeenCalledWith('http://react-cdp-api.herokuapp.com/movies/2');
        expect(global.fetch).toHaveBeenCalledWith('http://react-cdp-api.herokuapp.com/movies');
    });

    it('should call fetch', () => {
        const props = {
            match: {
                params: {
                    movieId: 3
                }
            }
        };

        tree.instance().props = {
            match: {
                params: {
                    movieId: 2
                }
            }
        };
        tree.instance().componentWillReceiveProps(props);
        expect(global.fetch).toHaveBeenCalledWith('http://react-cdp-api.herokuapp.com/movies/2');
    });

    it('should return empty array if doesn\'t match genres', () => {
        const movie = {
            id: 1,
            title: 'title_1',
            genre: ['drama'],
            release_date: '12-01-2018'
        };

        const movies = [{
            id: 1,
            title: 'title_1',
            genres: ['drama'],
            release_date: '12-01-2018'
        }, {
            id: 2,
            title: 'title_2',
            genres: ['comedy'],
            release_date: '13-01-2018'
        }];

        const result = tree.instance().getFilteredMovies(movie, movies);
        expect(result).toEqual([]);
    });

    it('should return empty array if doesn\'t movie', () => {
        const movies = [{
            id: 1,
            title: 'title_1',
            genres: ['drama'],
            release_date: '12-01-2018'
        }, {
            id: 2,
            title: 'title_2',
            genres: ['comedy'],
            release_date: '13-01-2018'
        }];

        const result = tree.instance().getFilteredMovies(null, movies);
        expect(result).toEqual([]);
    });

    it('should return filter movies array', () => {
        const movie = {
            id: 1,
            title: 'title_1',
            genres: ['drama', 'comedy'],
            release_date: '12-01-2018'
        };

        const movies = [{
            id: 1,
            title: 'title_1',
            genres: ['drama'],
            release_date: '12-01-2018'
        }, {
            id: 2,
            title: 'title_2',
            genres: ['comedy'],
            release_date: '13-01-2018'
        }];

        const result = tree.instance().getFilteredMovies(movie, movies);
        expect(result).toEqual([
            {
                id: 2,
                title: 'title_2',
                genres: ['comedy'],
                release_date: '13-01-2018'
            }
        ]);
    });
});