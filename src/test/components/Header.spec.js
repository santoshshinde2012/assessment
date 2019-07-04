import expect from "expect";
import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/game-kit/Header";

describe("Header Component", () => {
  const stubProps = {
    round: 0,
    restart: jest.fn()
  };
  it("renders", () => {
    const wrapper = shallow(<Header {...stubProps} />);
    expect(wrapper.exists()).toBe(true);
  });
});
