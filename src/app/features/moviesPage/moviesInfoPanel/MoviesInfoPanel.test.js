import React from 'react';
import { shallow, containsMatchingElement } from 'enzyme';
import MoviesInfoPanel from './MoviesInfoPanel';

describe('MoviesInfoPanel', () => {
    it('should be defined', () => {
        expect(MoviesInfoPanel).toBeDefined();
    });

    it('should render correctly ', () => {
        const tree = shallow(<MoviesInfoPanel />);
        expect(tree).toMatchSnapshot();
    });

    it('should render correctly if count === 0', () => {
        const tree = shallow(<MoviesInfoPanel count={0}/>);
        expect(
            tree.containsMatchingElement(
              <span></span>
            )
        ).toBeTruthy()
    });

    it('should render correctly if count === 1', () => {
        const tree = shallow(<MoviesInfoPanel count={1}/>);
        expect(
            tree.containsMatchingElement(
                <span>1 movie found</span>
            )
        ).toBeTruthy()
    });

    it('should render correctly if count > 1', () => {
        const tree = shallow(<MoviesInfoPanel count={10}/>);
        expect(
            tree.containsMatchingElement(
                <span>10 movies found</span>
            )
        ).toBeTruthy()
    });
});