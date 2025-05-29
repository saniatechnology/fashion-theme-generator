// import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Layout } from "./Layout.jsx";

// Displays app title
describe("Layout", () => {
  it("renders app title", () => {
    render(<Layout />);
    const heading = screen.findByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Fashion Theme Generator");
  });
});
