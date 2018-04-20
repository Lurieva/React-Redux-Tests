import React from 'react';
import { shallow } from 'enzyme';
import InfoPanel from './InfoPanel';

describe('InfoPanel', () => {
    it('should be defined', () => {
        expect(InfoPanel).toBeDefined();
    });

    it('should render correctly', () => {
        const tree = shallow(
            <InfoPanel />
        );

        expect(tree).toMatchSnapshot();
    });
});