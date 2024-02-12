import React from "react";
import { render, screen } from "@testing-library/react";
import { expect, test, describe, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import CartItemCard from ".";

const mockFn = vi.fn();
const mockData = {
  currencySymbol: "USD",
  imageLocation: "",
  name: "Name",
  onDelete: mockFn,
  price: 123,
};
describe("Cart item card component", () => {
  const { rerender } = render(<CartItemCard {...mockData} />);

  test("Call delete callback when clicked", async () => {
    const button = screen.getByRole("button");
    expect(button).toBeDefined();
    await userEvent.click(button);
    expect(mockFn).toBeCalledTimes(1);
  });
  test("Displays title", async () => {
    const title = screen.getByText(mockData?.name);
    expect(title).toBeDefined();
    expect(title.innerHTML).toContain(mockData?.name);
  });
  test("Displays price", async () => {
    const title = screen.getByText(mockData?.name);
    expect(title).toBeDefined();
    expect(title.innerHTML).toContain(mockData?.name);
  });
});
