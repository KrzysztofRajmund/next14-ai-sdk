import { render, screen } from "@testing-library/react";
import Page from "./page";
import { mockReset } from "jest-mock-extended";
import { prismaMock } from "../../../../jest.setup";

const note1 = {
  id: "1",
  title: "Title example 1",
  content: "Description example 1",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const note2 = {
  id: "2",
  title: "Title example 2",
  content: "Description example 2",
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe("Notes", () => {
  beforeEach(() => {
    mockReset(prismaMock);
  });

  it.each([note1, note2])(
    "shows title and content for card: $id",
    async ({ title, content }) => {
      prismaMock.note.findMany.mockResolvedValue([note1, note2]);

      render(await Page());

      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(content)).toBeInTheDocument();
    },
  );
});
