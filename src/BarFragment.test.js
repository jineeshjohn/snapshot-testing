import React, { Fragment } from "react";
import { shallow } from "enzyme";

import BarFragment from "./BarFragment";

describe("<BarFragment />", () => {
  // test("should contain a <Fragment>", () => {
  //   const fooWrapper = shallow(<BarFragment />);

  //   const result = barFragmentWrapper.find(Fragment);
  //   expect(result).toHaveLength(1);
  // });

  test("should contain a 3 <div>'s", () => {
    const barFragmentWrapper = shallow(<BarFragment />);

    const result = barFragmentWrapper.find("div");
    expect(result).toHaveLength(3);
  });
});
