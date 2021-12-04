import React from "react";
import { render } from "@testing-library/react-native";
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
    test("Then it should a home icon.", () => {
      const result = render(<Navbar />);

      expect(result).toMatchSnapshot();
    });
  });
});
