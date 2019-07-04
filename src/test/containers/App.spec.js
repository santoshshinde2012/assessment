import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";

import App from "../../containers/App";

const storeFake = state => {
  return {
    default: jest.fn(),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: () => state
  };
};

describe("App Component", () => {
  let wrapper;
  let container;

  const stubProps = {
    memory: {
      cards: [],
      round: 1,
      guess1: null,
      guess2: null
    },
    actions: {
      flipCard: jest.fn(),
      restart: jest.fn()
    }
  };

  beforeEach(() => {
    jest.resetAllMocks();
    const store = storeFake(stubProps);
    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    container = wrapper.find(App);
  });

  it("should render both the container and the component ", () => {
    expect(container.exists()).toBe(true);
  });
});
