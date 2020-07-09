import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "../src/App.js";

test("App Component renders", () => {
  render(<App />);
  expect(screen.queryByText("First Component Appears")).toBeInTheDocument();
});
