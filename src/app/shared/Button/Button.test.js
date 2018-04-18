import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button.js';

describe('Button', () => {
    const mockFn = jest.fn();

    it('should be defined', () => {
        expect(Button).toBeDefined();
    });
});