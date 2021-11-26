import App from "./App";
import React from "react";
import { render } from "@testing-library/react-native";

test("This is a test", () => {
  const screen = render(<App />);
  const result = screen.getByText("Read the docs to discover what to do next:");

  expect(result).not.toBe(null);
});
