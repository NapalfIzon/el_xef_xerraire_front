import App from "./App";
import React from "react";
import { render } from "@testing-library/react-native";

test("This is a test", () => {
  const screen = render(<App />);
  const result = screen.getByText("El xef xerraire");

  expect(result).not.toBe(null);
});
