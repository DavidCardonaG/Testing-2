import React from 'react'
import {mount} from 'enzyme'
import {Navbar} from '../../components/ui/Navbar'
import {AuthContext} from '../../auth/AuthContext'
import {MemoryRouter, Router} from 'react-router'
import '@testing-library/jest-dom'

describe('Navbar', () => {

    const historyMock={
        push:jest.fn(),
        replace:jest.fn(),
        location:{},
        listen:jest.fn(),
        createHref:jest.fn(),
    }
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
                <Router history={historyMock}>
                    <Navbar/>
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>

    )

    test('Validar name user', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('David Cardona García')
    })
    test('Llamar Función logout', () => {
        wrapper.find('button').prop('onClick')()
        expect(contextValue.dispatch).toHaveBeenCalledWith({});
    })
    test('', () =>{
        expect(historyMock.replace).toHaveBeenCalledWith('/login')
    })
    
})