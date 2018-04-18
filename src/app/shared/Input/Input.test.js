import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input.js';

describe('Input', () => {
    const mockFn = jest.fn();

    it('should be defined', () => {
        expect(Input).toBeDefined();
    });

    it('should render correctly', () => {
        const tree = shallow(
          <Input className='classNameMock' onChange={mockFn} />
        );

        expect(tree).toMatchSnapshot();
    });

    it('should call mock function when input change', () => {
        const tree = shallow(
            <Input className='classNameMock' onChange={mockFn} />
        );

        tree.simulate('change');
        expect(mockFn).toHaveBeenCalled();
    });
});