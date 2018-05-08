import React from 'react';
import { shallow } from 'enzyme';
import Movies from './Movies';

jest.mock('./movie/Movie', () => 'Movie');
jest.mock('../noFilmsFound/NoFilmsFound', () => 'NoFilmsFound');

describe('Movies', () => {
    const movies = [{id: 1, name: 'movie_1'}, {id:2, name: 'movie_2'}];

    it('should be defined', () => {
        expect(Movies).toBeDefined();
    });

    it('should render correctly ', () => {
        const tree = shallow(<Movies movies={movies} />);
        expect(tree).toMatchSnapshot();
    });

    it('should render components as movies length', () => {
        const tree = shallow(<Movies movies={movies} />);
        expect(tree.children().length).toBe(2);
    });

    it('should render one component if there is not movies', () => {
        const tree = shallow(<Movies movies={[]} />);
        expect(tree.children().length).toBe(1);
    });
});