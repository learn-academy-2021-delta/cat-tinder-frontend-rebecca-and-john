import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import CatIndex from './CatIndex'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('When CatIndex renders', () => {
    it('displays a heading', () => {
        const catIndex = shallow(<CatIndex />)
        const indexHeading = catIndex.find('h3')
        expect(indexHeading.text()).toEqual('Meet Our Cat Friends')
        
    })
})