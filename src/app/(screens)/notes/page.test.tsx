import { render, screen } from "@testing-library/react";
import Page from "./page";

global.fetch = jest.fn(() =>
  Promise.resolve({ ok: true, json: () => Promise.resolve([]) })
) as jest.Mock;

describe("Notes", () => {
  it("shows page title", async () => {
    render(await Page());
    expect(screen.getByRole("heading")).toHaveTextContent("Your recent notes:");
  });
})