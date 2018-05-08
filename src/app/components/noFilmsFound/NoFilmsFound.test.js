import React from 'react';
import { shallow } from 'enzyme';
import NoFilmsFound from './NoFilmsFound';

describe('NoFilmsFound', () => {
    it('should be defined', () => {
        expect(NoFilmsFound).toBeDefined();
    });

    it('should render correctly', () => {
        const tree = shallow(
            <NoFilmsFound />
        );

        expect(tree).toMatchSnapshot();
    });
});