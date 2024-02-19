import { render, screen } from "@testing-library/react";
import Page from "./page";

describe("Chat", () => {
  it("shows page title", () => {
    render(<Page />);
    expect(screen.getByRole("heading")).toHaveTextContent("Chatter Box");
  });
})