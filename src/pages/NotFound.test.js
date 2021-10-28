import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import NotFound from './NotFound.js'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('when NotFound loads', () => {
    it('an image is rendered', () => {
        const notFound = shallow(<NotFound />)
        const imgWrapper = notFound.find('img')
        expect(imgWrapper.length).toEqual(1)    
    })

    it('the image src is 404.jpeg', () => {
        const notFound = shallow(<NotFound />)
        const imgWrapper = notFound.find('img')
        console.log(imgWrapper.prop())
        expect(imgWrapper.prop('src')).toEqual('404.jpeg')    
    })
})