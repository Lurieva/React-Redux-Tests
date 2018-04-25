import React from 'react';
import { shallow } from 'enzyme';
import MovieDetailsPage from './MovieDetailsPage';

jest.mock('../../components/header/Header', () => 'Header');
jest.mock('../../components/infoPanel/InfoPanel', () => 'InfoPanel');
jest.mock('../../components/movies/Movies', () => 'Movies');
jest.mock('../../components/sortBy/SortBy', () => 'SortBy');
jest.mock('./movieDetails/MovieDetails', () => 'MovieDetails');
jest.mock('./directorInfo/DirectorInfo', () => 'DirectorInfo');

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
});
