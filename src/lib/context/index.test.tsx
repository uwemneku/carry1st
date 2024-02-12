import { renderHook, act, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import { IProduct } from "@/types";
import CartContextProvider, { useCartContext } from "./CartContextProvider";
import { PropsWithChildren } from "react";
import DrawerContext from "./DrawerContext";
import { Drawer } from "vaul";
import userEvent from "@testing-library/user-event";
import { delay } from "../util";

const mockData: IProduct = {
  id: 1,
  name: "Product 1",
  price: 10,
  currencyCode: "",
  currencySymbol: "",
  description: "",
  imageLocation: "",
  quantity: 1,
  status: "ACTIVE",
};

const T = ({ children }: PropsWithChildren) => (
  <CartContextProvider>
    <DrawerContext>
      <Drawer.Trigger data-testid="open">Open</Drawer.Trigger>
      {children}
    </DrawerContext>
  </CartContextProvider>
);
describe("CartContextProvider", () => {
  const { result } = renderHook(() => useCartContext(), {
    wrapper: T,
  });
  test("addItem and deleteItem functions work correctly", () => {
    // Initial state
    expect(result.current.items).toEqual([]);

    // Add an item
    act(() => {
      result.current.addItem(mockData);
    });

    // Check if item is added
    expect(result.current.items).toEqual([mockData]);
  });

  test("Should display items in cart", async () => {
    const triggerButton = await screen.findByTestId("open");
    expect(triggerButton).toBeDefined();
    await userEvent.click(triggerButton);
    await delay(2000);
    const title = await screen.findByText(mockData.name);
    expect(title).toBeDefined();
  });
  test("Should remove items from cart", async () => {
    // Delete the added item
    act(() => {
      result.current.deleteItem(mockData?.id);
    });

    // Check if item is deleted
    expect(result.current.items).toEqual([]);
  });
  test("Should show button to continue button when cart is empty", async () => {
    const closeButton = await screen.findByText("Continue Shopping");
    expect(closeButton).toBeDefined();
  });
});
