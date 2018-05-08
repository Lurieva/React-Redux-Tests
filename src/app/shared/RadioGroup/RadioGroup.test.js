import React from 'react';
import { shallow } from 'enzyme';
import RadioGroup from './RadioGroup';

describe('RadioGroup', () => {
    const mockFn = jest.fn();

    it('should be defined', () => {
        expect(RadioGroup).toBeDefined();
    });

    it('should render correctly ', () => {
        const tree = shallow(<RadioGroup name='radio'
                                         param='value'
                                         title='title'
                                         onChange={mockFn}
                                         options={[{option: 'opt', value: 'value'}]}
                                         groupClassName='classNameMock' />);
        expect(tree).toMatchSnapshot();
    });

    it('should call mock function when input change', () => {
        const tree = shallow(<RadioGroup name='radio'
                                         param='value'
                                         title='title'
                                         onChange={mockFn}
                                         options={[]}
                                         groupClassName='classNameMock' />);

        tree.find('div.btn-group').simulate('change', { target: { checked: true } });
        expect(mockFn).toHaveBeenCalled();
    });
});