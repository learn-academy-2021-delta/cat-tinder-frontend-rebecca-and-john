import App from './App';
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Home from './pages/Home'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'

Enzyme.configure({ adapter: new Adapter() })

describe('when App loads', () => {
  it ('renders header and footer', () => {
    const app = shallow(<App />);
    const header = app.find("Header")
    const footer = app.find("Footer")
    expect(header.length).toEqual(1)
    expect(footer.length).toEqual(1)
  });

  it ('provides routes to Home, CatIndex, CatShow, CatNew, CatEdit', () => {
    const app = shallow(<App />);
    const home = app.find('[path="/"]')
    const catIndex = app.find('[path="/catindex"]')
    const catIndexRender = catIndex.props().render
    const catShow = app.find('[path="/catshow/:id"]')
    const catShowRender = catShow.props().render
    const catNew = app.find('[path="/catnew"]')
    const catEdit = app.find('[path="/catedit"]')
    expect(home.props().component).toEqual(Home)
    expect(catIndexRender.length).toEqual(1)
    expect(catShowRender.length).toEqual(1)
    expect(catNew.props().component).toEqual(CatNew)
    expect(catEdit.props().component).toEqual(CatEdit)
  });

})
