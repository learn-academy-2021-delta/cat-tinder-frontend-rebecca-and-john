import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import CatIndex from './CatIndex'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('when header loads', () => {
    it('contains text', () => {
        const header = shallow(<Header />)
        expect(header.find('header').text()).toEqual('Friendly Felines')
        
    })
})