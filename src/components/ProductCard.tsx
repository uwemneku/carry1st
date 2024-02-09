import { IProduct } from "@/types";
import React from "react";

interface Props
  extends Pick<IProduct, "id" | "name" | "price" | "imageLocation"> {}

function ProductCard({ id, imageLocation, name, price }: Props) {
  return <div>ProductCard</div>;
}

export default ProductCard;
