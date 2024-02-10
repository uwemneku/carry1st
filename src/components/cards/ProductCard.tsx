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
    <MotionDiv className="grid gap-2 ">
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
          />
        </MotionDiv>
      </Container>
      <div className="grid gap-3 font-normal text-xs text-gray-700">
        <h2 className="font-medium">{name}</h2>
        <p>
          {currencySymbol}
          {price}
        </p>
      </div>
    </MotionDiv>
  );
}

const Container = tw.div`max-w-[390px] transition-all duration-500 hover:drop-shadow-sm hover:scale-[1.05]`;

export default React.memo(ProductCard);
