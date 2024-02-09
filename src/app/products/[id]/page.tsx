import { MotionDiv } from "@/components/util/motion";
import getProductById from "@/services/product/getProductById";
import { PageProps } from "@/types";
import Image from "next/image";
import React from "react";

async function Page({ params }: PageProps<{ id: string }>) {
  const apiResponse = await getProductById(params?.id);
  console.log({ apiResponse });
  if ("error" in apiResponse) return null;

  return (
    <MotionDiv className="flex flex-col md:flex-row gap-10">
      <MotionDiv
        layoutId={params?.id?.toString()}
        className="bg-[#f7f7f7] rounded-md relative md:flex-1"
        layout="preserve-aspect"
      >
        <MotionDiv className="relative min-h-[310px] max-h-[900px]">
          <Image
            alt={apiResponse?.name}
            src={apiResponse?.imageLocation}
            fill
            className="object-contain object-center"
          />
        </MotionDiv>
      </MotionDiv>
      <div>
        <h1>{apiResponse?.name}</h1>
        <p>
          {apiResponse?.currencySymbol} {apiResponse?.price}
        </p>
        <p>{apiResponse?.description}</p>
      </div>
    </MotionDiv>
  );
}

export default Page;
