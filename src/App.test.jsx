import { render, screen } from "@testing-library/react";
import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";

import App from "./App";
import { POKEMON_API } from "./constants";
import appMock from "./mocks/App.mock";

const server = setupServer(
  http.get(POKEMON_API, () => {
    return HttpResponse.json(appMock);
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("App page", () => {
  it("renders page and get App text", () => {
    render(<App />);
    const appText = screen.getByText("App");
    expect(appText).toBeInTheDocument();
  });
});
