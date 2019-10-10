import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("Main screen", () => {
  it("Should render the App", () => {
    const { getByText } = render(<App />);
    expect(getByText("Micro-frontend template")).not.toBe(null);
  });
});
