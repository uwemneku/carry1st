"use client";

import { PropsWithChildren } from "react";
import { Drawer } from "vaul";
import { useCartContext } from "./CartContextProvider";
import Button from "@/components/button";
import CartItemCard from "@/components/cards/CartItemCard";

export default function DrawerContext({ children }: PropsWithChildren) {
  const { items, deleteItem } = useCartContext();
  const handleDeleteItem = (id: number) => () => deleteItem(id);

  const isCartEmpty = items.length === 0;
  const totalCost = items.reduce((prev, curr) => prev + curr.price, 0);
  const currency = items?.[0]?.currencySymbol || "";
  return (
    <Drawer.Root>
      {children}
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-30" />
        <Drawer.Content className="bg-zinc-100 max-w-6xl mx-auto flex min-h-[50%] max-h-[80%] flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0 z-50">
          <div className="p-4 bg-white rounded-t-[10px] flex-1 flex flex-col">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-4" />
            <div className="max-w-md mx-auto flex flex-col flex-1 w-full">
              <Drawer.Title className="font-medium mb-4 text-center text-xl">
                My Cart
              </Drawer.Title>
              {isCartEmpty ? (
                <>
                  <div className="flex-1 flex justify-center items-center">
                    <p>Your shopping cart is empty</p>
                  </div>
                  <Drawer.Close className="p-2 bg-black text-white">
                    Continue Shopping
                  </Drawer.Close>
                </>
              ) : (
                <>
                  <ul className="grid gap-6 pb-12 max-h-[40vh] overflow-y-auto">
                    {items.map((product) => (
                      <li key={product.id}>
                        <CartItemCard
                          {...product}
                          onDelete={handleDeleteItem(product.id)}
                        />
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-6 justify-between py-5 px-4">
                    <p className="font-semibold">Total Cost</p>
                    <p className="font-bold text-xl">
                      {currency}
                      {totalCost}
                    </p>
                  </div>
                  <Button>
                    <p>Check Out</p>
                  </Button>
                </>
              )}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
