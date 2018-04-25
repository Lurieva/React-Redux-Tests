import React from 'react';
import { shallow, containsMatchingElement } from 'enzyme';
import DirectorInfo from './DirectorInfo';

describe('DirectorInfo', () => {
    it('should be defined', () => {
        expect(DirectorInfo).toBeDefined();
    });

    it('should render correctly ', () => {
        const tree = shallow(<DirectorInfo />);
        expect(tree).toMatchSnapshot();
    });

    it('should render correctly if count === 0', () => {
        const tree = shallow(<DirectorInfo count={0} 
                                           director={'director'}/>);
        expect(
            tree.containsMatchingElement(
              <span></span>
            )
        ).toBeTruthy()
    });

    it('should render correctly if count === 1', () => {
        const tree = shallow(<DirectorInfo count={1} 
                                           director={'director'}/>);
        expect(
            tree.containsMatchingElement(
                <span>Film by director</span>
            )
        ).toBeTruthy()
    });

    it('should render correctly if count > 1', () => {
        const tree = shallow(<DirectorInfo count={10} 
                                           director={'director'}/>);
        expect(
            tree.containsMatchingElement(
                <span>Films by director</span>
            )
        ).toBeTruthy()
    });
});
