import React from 'react';
import {mount} from 'enzyme'
import {AppRouter} from '../../routers/AppRouter'
import {AuthContext} from '../../auth/AuthContext'
import '@testing-library/jest-dom'

describe('AppRouter', () => {
    test('Mostar Login si no esta Auth', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name:'David Cardona García'
            }
        }
        const wrapper = mount (
            <AuthContext.Provider value={contextValue}>
            <AppRouter/>
            </AuthContext.Provider>
        )
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('navbar').exists()).toBe(true);
    })
    
})