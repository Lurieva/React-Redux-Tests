import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
    const mockFn = jest.fn();

    it('should be defined', () => {
        expect(Button).toBeDefined();
    });

    it('should render correctly', () => {
        const tree = shallow(
          <Button className='classNameMock' disabled='disabled' name='BtnName' onClick={mockFn} />
        );

        expect(tree).toMatchSnapshot();
    });

    it('should call mock function when button click', () => {
        const tree = shallow(
            <Button className='classNameMock' disabled='disabled' name='BtnName' onClick={mockFn} />
        );

        tree.simulate('click');
        expect(mockFn).toHaveBeenCalled();
    });
});