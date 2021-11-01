import React from "react";
import Enzyme, { shallow } from "enzyme";
import CatEdit from "./CatEdit";
import Adapter from "enzyme-adapter-react-16";
import mockCats from "../mockCats.js";

Enzyme.configure({ adapter: new Adapter() });

describe("When CatEdit renders", () => {
    it("displays a heading and 3 inputs", () => {
    // this may need further clarification on how to make it more dynamic. Added a specific test cat to bypass some issue with props being undefined
    //how to reference props's properties in enzyme
    const catEdit = shallow(<CatEdit cat={mockCats[0]} />);
    const inputs = catEdit.find("Input");
    expect(inputs.length).toEqual(3);
  });
});
