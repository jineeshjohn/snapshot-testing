import React from "react";

import Enzyme, { shallow } from "enzyme";
import renderer from 'react-test-renderer';
import Adapter from "enzyme-adapter-react-16";

import HelloContainer from "./HelloContainer";
import Hello from "./Hello";

Enzyme.configure({ adapter: new Adapter() });

it("renders properly", () => {
  const wrapper = renderer.create(<HelloContainer name="CodeSandbox" />);
  expect(wrapper).toMatchSnapshot();
});
