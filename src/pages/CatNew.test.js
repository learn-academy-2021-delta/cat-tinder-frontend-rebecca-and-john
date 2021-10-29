import React from "react";
import Enzyme, { shallow } from "enzyme";
import CatNew from "./CatNew";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("When CatNew renders", () => {
  it("displays a heading and 3 inputs", () => {
    const catIndex = shallow(<CatNew />);
      const indexHeading = catIndex.find("h3");
      const inputs = catIndex.find("Input")
      expect(indexHeading.text()).toEqual("New Cat");
      expect(inputs.length).toEqual(3);
  });
});
