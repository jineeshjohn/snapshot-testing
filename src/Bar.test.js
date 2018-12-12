import React from "react";
import { shallow } from "enzyme";

import Bar from "./Bar";
import BarFragment from "./BarFragment";

describe("<Bar />", () => {
  test("should have 1 container <div>", () => {
    const barWrapper = shallow(<Bar />);

    const result = barWrapper.find("div");
    expect(result).toHaveLength(1);
  });

  test("should contain 3 <span>'s", () => {
    const barWrapper = shallow(<Bar />);

    const result = barWrapper.find("span");
    expect(result).toHaveLength(3);
  });

  test("should contain 1 <BarFragment>", () => {
    const barWrapper = shallow(<Bar />);

    const result = barWrapper.find(BarFragment);
    expect(result).toHaveLength(1);
  });
});
