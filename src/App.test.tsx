import App from "./App";
import React from "react";
import { render } from "@testing-library/react-native";

test("This is a test", () => {
  render(<App />);

  expect(true).not.toBe(false);
});
