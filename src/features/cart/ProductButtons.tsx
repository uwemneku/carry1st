"use client";
import React from "react";
import { useCartContext } from "../../components/context/CartContextProvider";
import { IProduct } from "@/types";
import Button from "@/components/button";
import { Drawer } from "vaul";

interface Props extends IProduct {}

function ProductButtons(product: Props) {
  const { addItem, deleteItem, items } = useCartContext();
  const isInCart = items.some((i) => i.id === product.id);
  const addProduct = () => !isInCart && addItem(product);
  const handleClick = () => {
    isInCart ? deleteItem(product?.id) : addProduct();
  };
  const label = isInCart ? "Remove from cart" : "Add to Cart";
  return (
    <div className="gap-2 flex flex-col">
      <Button onClick={handleClick} variants="filled" className="text-center">
        <p className="font-medium">{label}</p>
      </Button>
      <Drawer.Trigger
        onClick={addProduct}
        className="py-2 border-2 border-black"
      >
        <p className="font-medium">Buy Now</p>
      </Drawer.Trigger>
    </div>
  );
}

export default ProductButtons;
