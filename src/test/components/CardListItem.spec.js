import React from "react";
import { shallow } from "enzyme";
import CardListItem from "../../components/game-kit/CardListItem";

describe("Card List Item Component", () => {
  const stubProps = {
    card: {
      id: 0,
      rel: 1,
      flipped: false,
      url: `http://example.url/first`,
      discovered: false
    },
    flipCard: jest.fn()
  };

  it("renders", () => {
    const wrapper = shallow(<CardListItem {...stubProps} />);
    expect(wrapper.exists()).toBe(true);
  });
});
