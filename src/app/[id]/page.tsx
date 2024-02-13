import { MotionDiv } from "@/components/util/motion";
import ProductButtons from "@/features/cart/ProductButtons";
import getAllProduct from "@/services/getAllProduct";
import getProductById from "@/services/getProductById";
import { PageProps } from "@/types";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

type Props = PageProps<{ id: string }>;

export async function generateStaticParams() {
  const allProduct = await getAllProduct();
  const initialProducts = allProduct.slice(0, 10); //Generate only the first 10 at build time
  return initialProducts.map((product) => ({
    id: product.id?.toString(),
  }));
}

export async function generateMetadata({ params }: Props) {
  const product = await getProductById(params?.id);
  return {
    title: `${product.name} | Carry1st Store`,
    description: `${product.description}`,
  };
}

async function Page({ params }: Props) {
  const product = await getProductById(params?.id);

  return (
    <MotionDiv className="flex flex-col md:flex-row gap-2 md:gap-10">
      <MotionDiv
        layoutId={params?.id?.toString()}
        className="bg-[#f3f4f6] rounded-md relative md:flex-1 h-screen max-h-[300px] md:max-h-[600px] flex justify-end items-center group z-10"
        layout="preserve-aspect"
      >
        <MotionDiv className="relative min-h-[310px] w-full group-hover:scale-105 transition-transform">
          <Image
            alt={product?.name}
            src={product?.imageLocation}
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </MotionDiv>
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", staggerChildren: 0.5 }}
        className="flex flex-col gap-8 flex-[0.5] md:py-5 bg-white rounded-md p-4"
      >
        <div className="">
          <h1 className="md:text-4xl text-2xl font-medium">{product?.name}</h1>
          <p className="font-medium text-lg text-zinc-600">
            {product?.currencySymbol}
            {product?.price}
          </p>
          <div className="mt-4 md:mt-8">
            <p className="text-zinc-600">{product?.description}</p>
          </div>
        </div>
        <div className="flex-[1]" />
        <ProductButtons {...product} />
      </MotionDiv>
    </MotionDiv>
  );
}

export default Page;
