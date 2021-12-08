import React from "react";
import { render } from "@testing-library/react-native";
import Header from "./Header";
import { NativeBaseProvider } from "native-base";
import { inset } from "../../utils/nativeBaseInset";

describe("Given a Header component,", () => {
  describe("When it is rendered,", () => {
    test("Then it should render a logo image and a title image.", () => {
      const result = render(
        <NativeBaseProvider initialWindowMetrics={inset}>
          <Header />
        </NativeBaseProvider>
      );

      expect(result).toMatchSnapshot();
    });
  });
});
