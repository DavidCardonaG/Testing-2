import React from 'react'
import {mount} from 'enzyme'
import {MemoryRouter, Route} from 'react-router'
import {HeroScreen} from '../../components/heroes/HeroScreen'
import '@testing-library/jest-dom'
describe ('', () => {
    const historyMock = {
        push: jest.fn(),
        goBack: jest.fn(),
        length: 10
    }

    const wrapper = mount(
        <MemoryRouter initialEntries={['/Hero']}>
            <HeroScreen history={historyMock}/>
        </MemoryRouter>
    )
    test ('Mostrar Redirect', () => {
        expect(wrapper.find('Redirect').exists()).toBe(true)
    })
    test('sould', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-hulk']}>
                <Route path="/hero/:heroeId" component={()=><HeroScreen history={historyMock} />}/>
            </MemoryRouter>
        )
        wrapper.find('button').prop('onClick')()
        expect(wrapper).toMatchSnapshot();
        expect(historyMock.push).toHaveBeenCalledWith('/')
        expect(historyMock.goBack).toHaveBeenCalled();
        expect(wrapper.find('h3').text().trim()).toBe('Hulk')

    })
})