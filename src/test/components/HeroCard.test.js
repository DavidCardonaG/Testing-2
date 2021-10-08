import React from 'react'
import {shallow} from 'enzyme'
import {HeroCard} from '../../components/heroes/HeroCard'

describe('HeroCard', () => {
    test('Validar info', () => {
        const id = 'dc_batman'
        const superhero = 'Batman'
        const alter_ego = 'Bruce Wayne'
        const first_appearance = 'Detective Comics #27'
        const characters = 'Bruce Wayne'

        const wrapper = shallow(<HeroCard
            id={id}
            superhero={superhero}
            alter_ego={alter_ego}
            first_appearance={first_appearance}
            characters={characters}
            />)

            const textP = wrapper.find('h5').text().trim()
            console.log(textP)

            expect(wrapper).toMatchSnapshot()
            expect(textP).toBe('Batman');
    })
})