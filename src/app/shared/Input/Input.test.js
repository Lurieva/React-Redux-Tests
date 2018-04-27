import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Input', () => {
    const mockFn = jest.fn();
    let tree;

    beforeEach(() => {
        tree = shallow(
            <Input className='classNameMock' onChange={mockFn} enterClick={mockFn}/>
        );
    });

    it('should be defined', () => {
        expect(Input).toBeDefined();
    });

    it('should render correctly', () => {
        expect(tree).toMatchSnapshot();
    });

    it('should call function when input change', () => {
        tree.simulate('change');
        expect(mockFn).toHaveBeenCalled();
    });

    it('should call function when enter press', () => {
        tree.simulate('keyPress', { key: 'Enter' });
        expect(mockFn).toHaveBeenCalled();
    });
});