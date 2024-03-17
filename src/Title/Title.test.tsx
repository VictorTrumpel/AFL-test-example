import { test } from "vitest";
import { Title } from "./Title";
import { render, screen } from "@testing-library/react";

const __AFL_DATA__ = `%__AFL_DATA__%`;

test("Тест", () => {
  render(<Title title={__AFL_DATA__} />);

  screen.debug();
});
