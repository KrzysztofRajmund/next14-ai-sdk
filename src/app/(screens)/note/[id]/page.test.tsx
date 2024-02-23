import { render, screen } from "@testing-library/react";
import Page from "./page";
import { mockReset } from "jest-mock-extended";
import { prismaMock } from "../../../../../jest.setup";

jest.mock("next/navigation", () => {
  return {
    useRouter: jest.fn(() => ({ refresh: jest.fn(), back: jest.fn() })),
  };
});

const note1 = {
  id: "1",
  title: "Title example 1",
  content: "Description example 1",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const defaultProps = { params: { id: note1.id } };

describe("Note", () => {
  beforeEach(() => {
    mockReset(prismaMock);
  });

  it("shows single note title and description", async () => {
    prismaMock.note.findMany.mockResolvedValue([note1]);

    render(await Page(defaultProps));
    const filteredNote = [note1].filter(
      (x) => x.id === defaultProps.params.id,
    )[0];
    const { title, content } = note1;

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
