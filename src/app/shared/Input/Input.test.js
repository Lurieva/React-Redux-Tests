import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Input', () => {
    const mockFnForChange = jest.fn();
    const mockFnForEnter = jest.fn();
    let tree;

    beforeEach(() => {
        tree = shallow(
            <Input className='classNameMock' onChange={mockFnForChange} enterClick={mockFnForEnter}/>
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

        expect(mockFnForChange).toHaveBeenCalled();
    });

    it('should call function when enter press', () => {
        tree.simulate('keyPress', { key: 'Enter' });

        expect(mockFnForEnter).toHaveBeenCalled();
        expect(mockFnForChange).toHaveBeenCalled();
    });
});