import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

jest.mock('../../shared/Button/Button', () => 'Button');
jest.mock('../../shared/LogoName/LogoName', () => 'LogoName');

describe('Header', () => {
    it('should be defined', () => {
        expect(Header).toBeDefined();
    });

    it('should render correctly ', () => {
        const tree = shallow(<Header isShowSearchBtn={true} />);
        expect(tree).toMatchSnapshot();
    });

    it('should render button', () => {
        const tree = shallow(<Header isShowSearchBtn={true} />);
        expect(tree.children().length).toBe(1);
    });
});