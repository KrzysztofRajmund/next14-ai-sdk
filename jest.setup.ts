import { PrismaClient } from "@prisma/client";
import { mockDeep, DeepMockProxy } from "jest-mock-extended";
import prisma from "@/lib/db/prisma";

// @testing-library/jest-dom includes a set of convenient custom matchers such as .toBeInTheDocument()
import "@testing-library/jest-dom";

// mocking prisma
// more info in docs: https://www.prisma.io/docs/orm/prisma-client/testing/unit-testing
jest.mock("@/lib/db/prisma", () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>(),
}));

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;
