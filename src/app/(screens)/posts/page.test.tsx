import { render, screen } from "@testing-library/react";
import Page from "./page";

global.fetch = jest.fn(() =>
  Promise.resolve({ ok: true, json: () => Promise.resolve([]) })
) as jest.Mock;

describe("Posts", () => {
  it("shows page title", async () => {
    render(await Page());
    expect(screen.getByRole("heading")).toHaveTextContent("Your recent posts:");
  });
})