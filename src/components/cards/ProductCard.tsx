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
    <MotionDiv className="grid bg-white rounded-md overflow-hidden border-[1px]">
      <Container>
        <MotionDiv
          layoutId={id?.toString()}
          className="relative min-h-40 md:min-h-60"
          layout="preserve-aspect"
        >
          <Image
            alt={name}
            src={imageLocation}
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </MotionDiv>
      </Container>
      <div className="grid gap-1 font-normal text-xs text-gray-700 p-2">
        <h2 className="font-semibold">{name}</h2>
        <p>
          {currencySymbol}
          {price}
        </p>
      </div>
    </MotionDiv>
  );
}

const Container = tw.div`max-w-[390px] transition-all duration-500 hover:drop-shadow-sm hover:scale-[1.05] border-b-[1px]`;

export default React.memo(ProductCard);
