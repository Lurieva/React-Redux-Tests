import React from 'react';
import { shallow } from 'enzyme';
import SearchBy from './SearchBy';

jest.mock('../../../shared/RadioGroup/RadioGroup', () => 'RadioGroup');

describe('SearchBy', () => {
    const mockFn = jest.fn();

    it('should be defined', () => {
        expect(SearchBy).toBeDefined();
    });

    it('should render correctly ', () => {
        const tree = shallow(<SearchBy searchBy='search'
                                       onChange={mockFn} />);
        expect(tree).toMatchSnapshot();
    });
});