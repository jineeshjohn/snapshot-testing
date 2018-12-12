import React from "react";
import { shallow } from "enzyme";

import Baz from "./Baz";

describe("<Baz />", () => {
  test("should render children", () => {
    const s = "hello world";
    const bazWrapper = shallow(<Baz>{s}</Baz>);

    const result = bazWrapper.find("span");
    expect(result).toHaveLength(1);
    expect(result.text()).toBe(s);
  });
});
