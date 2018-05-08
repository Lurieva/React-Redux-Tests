import React from 'react';
import { shallow } from 'enzyme';
import Filter from './Filter';

jest.mock('../../shared/Input/Input', () => 'Input');
jest.mock('../../shared/Button/Button', () => 'Button');
jest.mock('./searchBy/SearchBy', () => 'SearchBy');

describe('Filter', () => {
    const mockFn = jest.fn();
    const searchBy = 'value';

    it('should be defined', () => {
        expect(Filter).toBeDefined();
    });

    it('should render correctly ', () => {
        const tree = shallow(<Filter searchBy={searchBy}
                                     onClick={mockFn}
                                     onChangeSearchBy={mockFn}
                                     onFilterChange={mockFn} />);
        expect(tree).toMatchSnapshot();
    });
});