import React from 'react';
import { shallow } from 'enzyme';
import MovieDetails from './MovieDetails';

describe('MovieDetails', () => {
    const movieMock = {
        id: 1,
        title: 'title',
        poster_path: 'poster_path',
        tagline: 'tagline',
        overview: 'overview',
        year: '12-01-2018'
    };

    it('should be defined', () => {
        expect(MovieDetails).toBeDefined();
    });

    it('should render correctly ', () => {
        const tree = shallow(<MovieDetails movie={movieMock} />);
        expect(tree).toMatchSnapshot();
    });
});