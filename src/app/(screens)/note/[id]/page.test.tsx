import { render, screen } from "@testing-library/react";
import Page, { Note } from "./page";

const note: Note = {
  id: "1",
  title: "title example",
  body: "description example"
}

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true, json: () => Promise.resolve({
      id: note.id,
      title: note.title,
      body: note.body
    })
  })
) as jest.Mock;

describe("Note", () => {
  it("shows page title", async () => {
    render(await Page({ params: { id: note.id } }));
    expect(screen.getByText(`Your specific note: ${note.id}`)).toBeInTheDocument();
  });

  it("shows note title and description", async () => {
    render(await Page({ params: { id: note.id } }));

    expect(screen.getByText(note.title)).toBeInTheDocument();
    expect(screen.getByText(note.body)).toBeInTheDocument();
  });
})