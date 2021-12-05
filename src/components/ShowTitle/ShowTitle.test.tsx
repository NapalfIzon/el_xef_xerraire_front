import React from "react";
import { render } from "@testing-library/react-native";
import { NativeBaseProvider } from "native-base";
import { inset } from "../../utils/nativeBaseInset";
import ShowTitle from "./ShowTitle";

describe("Given a ShowTitle component,", () => {
  describe("When it received a string parameter,", () => {
    test("Then it should render the received text.", () => {
      const testText = "Test";

      const screen = render(
        <NativeBaseProvider initialWindowMetrics={inset}>
          <ShowTitle title={testText} />
        </NativeBaseProvider>
      );
      const result = screen.getByText(testText);

      expect(result).not.toBeNull();
    });
  });
});
