"use client";

import { IProduct } from "@/types";
import Image from "next/image";
import React from "react";

interface Props extends IProduct {
  onDelete(): void;
}

function CartItemCard({ onDelete, ...product }: Props) {
  return (
    <div className="flex justify-between items-center border-2 rounded-md">
      <div className="bg-[#f3f4f6] p-2 px-4">
        <div className="relative w-20 h-20 ">
          <Image
            alt={product?.name}
            src={product.imageLocation}
            fill
            className=""
          />
        </div>
      </div>
      <button className="px-4" onClick={onDelete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          className="fill-red-600"
        >
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" />
        </svg>
      </button>
    </div>
  );
}

export default React.memo(CartItemCard);
