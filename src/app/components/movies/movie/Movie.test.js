import React from 'react';
import { shallow } from 'enzyme';
import Movie from './Movie';

describe('Movie', () => {
    const movie = {
        id: 1,
        poster_path: 'path',
        title: 'title',
        release_date: '12-01-2018',
        genres: ['comedy']
    };

    it('should be defined', () => {
        expect(Movie).toBeDefined();
    });

    it('should render correctly ', () => {
        const tree = shallow(<Movie movie={movie} />);
        expect(tree).toMatchSnapshot();
    });
});