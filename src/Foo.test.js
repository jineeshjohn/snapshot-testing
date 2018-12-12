import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import "jest-styled-components";

import Foo from "./Foo";

const fooGenerator = label => mount(<Foo>{label}</Foo>);

describe("<Foo />", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<Foo>harrdddow</Foo>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("matches previous snapshot", () => {
    const foo = fooGenerator("foo");
    const tree = renderer.create(foo).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
