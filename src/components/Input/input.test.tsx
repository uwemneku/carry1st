import { expect, test } from "vitest";
import { render, screen, renderHook } from "@testing-library/react";
import BaseInput from "./BaseInput";

test("Page", () => {
  render(<BaseInput label="Testing" placeholder="placeholder" />);
  expect(screen.getAllByPlaceholderText("placeholder")).toBeDefined();
  expect(screen.getAllByText("Testing")).toBeDefined();
});
