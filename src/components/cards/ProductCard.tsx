import { IProduct } from "@/types";
import Image from "next/image";
import React from "react";
import tw from "tailwind-styled-components";
import { MotionDiv } from "../util/motion";

interface Props
  extends Pick<
    IProduct,
    "name" | "price" | "imageLocation" | "currencySymbol" | "id"
  > {}

function ProductCard({
  imageLocation,
  name,
  price,
  currencySymbol,
  id,
}: Props) {
  return (
    <MotionDiv className="grid p-2 rounded-md border-2 max-w-[220px] ">
      <MotionDiv
        layoutId={id?.toString()}
        className="relative rounded-md bg-[#f3f4f6] p-6 z-10"
        layout="preserve-aspect"
      >
        <ImageContainer>
          <Image
            alt={name}
            src={imageLocation}
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </ImageContainer>
      </MotionDiv>
      <div className="text-gray-700 p-2 md:gap-4 grid">
        <h2 className="text-sm">{name}</h2>
        <p className="font-semibold text-lg leading-6">
          {currencySymbol}
          {price}
        </p>
      </div>
    </MotionDiv>
  );
}

const ImageContainer = tw.div`transition-all duration-500 relative w-full h-full min-h-24 md:min-h-32 `;

export default React.memo(ProductCard);
