import React from 'react'
import {PrivateRoute} from '../../routers/PrivateRoute'
import {mount} from 'enzyme'
import { MemoryRouter } from 'react-router'

describe('PrivateRoute', () => {
    test('mostrar Component si el usuario esta auth', () => {

        const props = {
            location:{
                patchname: '/marvel'
            }
        }
        const wrapper = mount(
            <MemoryRouter>
            <PrivateRoute
            isAuthenticated={true} 
            Component= {() =><span>Component</span>}
            {...props}
            />
            </MemoryRouter>
        )
        console.log("xxx"+wrapper.html()+"xxx")
        expect(wrapper.find('span').exists()).toBe(true)
        expect(localStorage.setItem).toHaveBeenCalledWith('lastpatch', '/marvel')
    })
})