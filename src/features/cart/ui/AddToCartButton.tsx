"use client";

import Button from "@/components/button";
import { IProduct } from "@/types";
import { useCartContext } from "../context/CartContextProvider";

interface Props extends IProduct {}

function AddToCartButton(product: Props) {
  const { addItem, deleteItem, items } = useCartContext();
  const isInCart = items.some((i) => i.id === product.id);
  const handleClick = () => {
    isInCart ? deleteItem(product?.id) : addItem(product);
  };
  const label = isInCart ? "Remove from cart" : "Add to Cart";
  return (
    <Button onClick={handleClick} variants="filled" className="text-center">
      <p className="font-medium">{label}</p>
    </Button>
  );
}

export default AddToCartButton;
