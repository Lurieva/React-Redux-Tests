import React from 'react';
import { shallow } from 'enzyme';
import LogoName from './LogoName';

describe('LogoName', () => {
    it('should be defined', () => {
        expect(LogoName).toBeDefined();
    });

    it('should render correctly', () => {
        const tree = shallow(
          <LogoName />
        );

        expect(tree).toMatchSnapshot();
    });
});