import { MotionDiv } from "@/components/util/motion";
import AddToCartButton from "@/features/cart/ui/AddToCartButton";
import BuyButton from "@/features/cart/ui/BuyButton";
import getAllProduct from "@/services/getProduct";
import getProductById from "@/services/getProductById";
import { PageProps } from "@/types";
import Image from "next/image";
import React from "react";

export const dynamicParams = true;

export async function generateStaticParams() {
  const allProduct = await getAllProduct();
  const initialProducts = allProduct.slice(0, 5);
  console.log(initialProducts);

  return initialProducts.map((product) => ({
    id: product.id?.toString(),
  }));
}

async function Page({ params }: PageProps<{ id: string }>) {
  const product = await getProductById(params?.id);

  return (
    <MotionDiv className="flex flex-col md:flex-row gap-10">
      <MotionDiv
        layoutId={params?.id?.toString()}
        className="bg-[#f7f7f7] relative md:flex-1 h-screen max-h-[300px] md:max-h-[600px] flex justify-end items-center group"
        layout="preserve-aspect"
      >
        <MotionDiv className="relative min-h-[310px] w-full group-hover:scale-105 transition-transform">
          <Image
            alt={product?.name}
            src={product?.imageLocation}
            fill
            className="object-contain object-center"
          />
        </MotionDiv>
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", staggerChildren: 0.5 }}
        className="flex flex-col gap-8 flex-[0.5] lg:py-5"
      >
        <div className="">
          <h1 className="md:text-4xl text-2xl font-medium">{product?.name}</h1>
          <p className="font-medium text-lg text-gray-500">
            {product?.currencySymbol}
            {product?.price}
          </p>
        </div>
        <div className="flex-[1]" />
        <div className="gap-2 flex flex-col">
          <AddToCartButton {...product} />
          <BuyButton id={params?.id} />
        </div>
        <div>
          <p>{product?.description}</p>
        </div>
      </MotionDiv>
    </MotionDiv>
  );
}

export default Page;
