import React from 'react';
import { shallow } from 'enzyme';
import MainLayout from './MainLayout';

jest.mock('../footer/Footer', () => 'Footer');

describe('MainLayout', () => {
    it('should be defined', () => {
        expect(MainLayout).toBeDefined();
    });

    it('should render correctly', () => {
        const tree = shallow(
            <MainLayout />
        );

        expect(tree).toMatchSnapshot();
    });
});