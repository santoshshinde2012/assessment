import React from "react";
import { shallow } from "enzyme";

import CardList from "../../components/game-kit/CardList";

describe("Card List Component", () => {
  const stubProps = {
    cards: [
      {
        id: 0,
        rel: 1,
        flipped: false,
        url: `http://example.url/first`,
        discovered: false
      },
      {
        id: 1,
        rel: 0,
        flipped: false,
        url: `http://example.url/first`,
        discovered: false
      }
    ],
    flipCard: jest.fn()
  };

  it("renders", () => {
    const wrapper = shallow(<CardList {...stubProps} />);
    expect(wrapper.exists()).toBe(true);
  });
});
