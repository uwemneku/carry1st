import React from "react";
import { render, screen } from "@testing-library/react";
import { expect, test, describe, vi } from "vitest";
import Button from ".";
import userEvent from "@testing-library/user-event";

describe("Button component", () => {
  const { rerender } = render(<Button />);

  test("Renders with default filled variant", () => {
    const button = screen.getByRole("button");
    expect(button).toBeDefined();
    expect(button.className).contain("bg-black text-white");
  });

  test("Renders with outline variant", () => {
    rerender(<Button variants="outline" />);
    const button = screen.getByRole("button");
    expect(button).toBeDefined();
    expect(button.className).contain("border-2");
  });

  test("Click event works", async () => {
    const onClick = vi.fn();
    rerender(<Button onClick={onClick} />);
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  test("Click event should not works", async () => {
    const onClick = vi.fn();
    rerender(<Button disabled onClick={onClick} />);
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  test("Custom class name is applied", () => {
    rerender(<Button className="custom-class" />);
    const button = screen.getByRole("button");
    expect(button.className).toContain("custom-class");
  });
});
