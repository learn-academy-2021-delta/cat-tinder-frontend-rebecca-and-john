import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Header from './Header.js'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('when header loads', () => {
    it('should contain header tag', () => {
        const headerComponent = shallow(<Header />)
        const headerTag = headerComponent.find('header')
        expect(headerTag.length).toEqual(1)
        
    })
})