import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

jest.mock('../../shared/Button/Button', () => 'Button');

describe('NotFound', () => {
    let mockFn = jest.fn();

    it('should be defined', () => {
        expect(NotFound).toBeDefined();
    });

    it('should render correctly', () => {
        const tree = shallow(
            <NotFound />
        );

        expect(tree).toMatchSnapshot();
    });
});