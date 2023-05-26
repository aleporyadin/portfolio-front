import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import Banner from ".";

global.MutationObserver = class {
  constructor(callback) {}
  disconnect() {}
  observe(element, initObject) {}
};

afterEach(cleanup);

test("Banner render successfully", () => {
  const onClick = jest.fn();
  render(<Banner name="" />);
  const banner = screen.getByTestId("banner");
  expect(banner).toBeInTheDocument();
});
