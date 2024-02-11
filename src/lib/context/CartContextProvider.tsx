"use client";
import { IProduct } from "@/types";
import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

interface ICartContext {
  items: IProduct[];
  addItem(i: IProduct): void;
  deleteItem(id: IProduct["id"]): void;
}

const Context = createContext<ICartContext>({
  items: [],
  addItem() {},
  deleteItem() {},
});

function CartContextProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<IProduct[]>([]);

  const addItem = useCallback(
    (i: IProduct) => setItems((prev) => [...prev, i]),
    []
  );
  const deleteItem = useCallback(
    (id: IProduct["id"]) => setItems((prev) => prev.filter((i) => i.id !== id)),
    []
  );
  return (
    <Context.Provider value={{ items, addItem, deleteItem }}>
      {children}
    </Context.Provider>
  );
}

export const useCartContext = () => useContext(Context);

export default CartContextProvider;
