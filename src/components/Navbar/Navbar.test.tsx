import React from "react";
import { Provider } from "react-redux";
import configureStore from "../../redux/store";
import { render } from "@testing-library/react-native";
import { NavigationProps } from "../../types/propTypes";
import Navbar from "./Navbar";

jest.mock("native-base", () => ({
  HStack: "",
  IconButton: "",
  Icon: "",
}));
jest.mock("@fortawesome/react-native-fontawesome", () => ({
  FontAwesomeIcon: "",
}));
const store = configureStore();

describe("Given a Navbar component,", () => {
  describe("When it is rendered,", () => {
    test("Then it should render the same as the snapshot.", () => {
      const navigationTest: NavigationProps = {
        navigation: {
          navigate: jest.fn(),
        },
      };

      const result = render(
        <Provider store={store}>
          <Navbar navigation={navigationTest} />
        </Provider>
      );

      expect(result).toMatchSnapshot();
    });
  });

  test("Then it should render a Home button.", () => {
    const navigationTest: NavigationProps = {
      navigation: {
        navigate: jest.fn(),
      },
    };

    const screen = render(
      <Provider store={store}>
        <Navbar navigation={navigationTest} />
      </Provider>
    );
    const buttons = screen.getAllByRole("button");
    const homeButton = screen.getByLabelText("Home");

    expect(buttons).not.toBeNull();
    expect(homeButton).not.toBeNull();
  });
});
