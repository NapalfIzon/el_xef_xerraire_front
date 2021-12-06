import React from "react";
import { render } from "@testing-library/react-native";
import BackgroundImage from "./BackgroundImage";

describe("Given a BackgroundImage component,", () => {
  describe("When it is rendered,", () => {
    test("Then it should render a brackground image.", () => {
      const result = render(<BackgroundImage />);

      expect(result).toMatchSnapshot();
    });
  });
});
