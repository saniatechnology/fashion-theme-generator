import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Layout } from "./Layout.tsx";

describe("Layout", () => {
  it("renders app title", async () => {
    render(<Layout />);
    const heading = await screen.findByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Fashion Theme Generator");
  });
});
