import React from 'react';
import { shallow } from 'enzyme';
import SortBy from './SortBy';

jest.mock('../../shared/RadioGroup/RadioGroup', () => 'RadioGroup');

describe('SortBy', () => {
    const mockFn = jest.fn();

    it('should be defined', () => {
        expect(SortBy).toBeDefined();
    });

    it('should render correctly ', () => {
        const tree = shallow(<SortBy sortBy='sort'
                                     onChangeSortBy={mockFn} />);
        expect(tree).toMatchSnapshot();
    });
});