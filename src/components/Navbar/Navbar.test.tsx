import React from "react";
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

describe("Given a Navbar component,", () => {
  describe("When it is rendered,", () => {
    test("Then it should render the same as the snapshot.", () => {
      const navigationTest: NavigationProps = {
        navigation: {
          navigate: jest.fn(),
        },
      };

      const result = render(<Navbar navigation={navigationTest} />);

      expect(result).toMatchSnapshot();
    });
  });

  test("Then it should render al the Navbar buttons.", () => {
    const navigationTest: NavigationProps = {
      navigation: {
        navigate: jest.fn(),
      },
    };

    const screen = render(<Navbar navigation={navigationTest} />);
    const buttons = screen.getAllByRole("button");
    const homeButton = screen.getByLabelText("Home");
    const searchButton = screen.getByLabelText("Search");
    const addRecipeButton = screen.getByLabelText("Add your recipe");
    const profileButton = screen.getByLabelText("Profile");
    const loginButton = screen.getByLabelText("Login");

    expect(buttons).not.toBeNull();
    expect(homeButton).not.toBeNull();
    expect(searchButton).not.toBeNull();
    expect(addRecipeButton).not.toBeNull();
    expect(profileButton).not.toBeNull();
    expect(loginButton).not.toBeNull();
  });
});
