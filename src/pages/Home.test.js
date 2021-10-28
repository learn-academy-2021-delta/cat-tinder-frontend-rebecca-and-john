import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'
Enzyme.configure({ adapter: new Adapter() })

describe("Home renders content", () => {
  it('Home renders content', () => {
    const home = shallow(<Home />)
    expect(home.find('p').text()).toEqual('Home')
  })
})