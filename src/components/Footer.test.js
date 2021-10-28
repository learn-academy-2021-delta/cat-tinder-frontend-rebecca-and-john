import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Footer from "./Footer"
Enzyme.configure({ adapter: new Adapter() })

describe("Footer renders content", () => {
  it("Footer renders content", () => {
    const footer = shallow(<Footer />)
    const navWrapper = footer.find("NavItem")
    expect(navWrapper.length).toEqual(3)
  })
})
