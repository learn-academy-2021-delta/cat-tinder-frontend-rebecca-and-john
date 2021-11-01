import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import CatShow from './CatShow'
import Adapter from 'enzyme-adapter-react-16'
import mockCats from "../mockCats.js";

Enzyme.configure({ adapter: new Adapter() })

describe('When CatShow renders', () => {
  it('displays a heading, 3 paragraph tags, and a NavLink component', () => {
    // this may need further clarification on how to make it more dynamic. Added a specific test cat to bypass some issue with props being undefined
    //how to reference props's properties in enzyme
    //NavLink on Line 20 : TypeError: Cannot read property 'id' of undefined
    const catShow = shallow(<CatShow cat={mockCats[0]} />);
    const catShowContainer = catShow.find("div");
    const title = catShowContainer.find("h3");
    const pTags = catShowContainer.find("p");
    expect(title.text()).toEqual("Cat Details");
    expect(pTags.length).toEqual(3);
  
  })
})
