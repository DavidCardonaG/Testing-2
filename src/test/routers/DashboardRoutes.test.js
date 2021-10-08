import React from 'react'
import {mount} from 'enzyme'
import {DashboardRoutes} from '../../routers/DashboardRoutes'
import {AuthContext} from '../../auth/AuthContext'
import {MemoryRouter} from 'react-router'
import '@testing-library/jest-dom'

describe('validar componente DashboardRoutes' , () => {

    const contextValue = {
        dispatch: jest.fn(),
        user:{
            logged: true,
            name:'David Cardona García'
        }
    }
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                    <DashboardRoutes/>
            </MemoryRouter>
        </AuthContext.Provider>

    )
    test('Verifar name del user Auth', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('David Cardona García')

    })

    test('Llamar Función logout', () => {
        wrapper.find('button').prop('onClick')()
        expect(contextValue.dispatch).toHaveBeenCalledWith({});
    })
})
