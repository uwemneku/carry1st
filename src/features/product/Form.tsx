"use client";

import FormInput from "@/components/Input/FormInput";
import ImageInput from "@/components/Input/ImageInput";
import Button from "@/components/button";
import { MotionDiv, MotionP } from "@/components/util/motion";
import {
  ProductFormValues,
  productFormValidation,
} from "@/features/product/validation";
import useCreateProduct from "@/lib/hooks/useCreateProduct";
import revalidateProductPage from "@/services/revalidateProductPage";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { ComponentProps, useRef, useState } from "react";
import { useForm } from "react-hook-form";

function ProductForm() {
  const { createProduct, isLoading, isError, data, reset } = useCreateProduct();
  const {
    control,
    handleSubmit,
    reset: resetFields,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productFormValidation),
  });
  const hasRevalidatedPage = useRef(false);

  const buttonLabel = isLoading ? "Uploading Product" : "Add Product";

  const inputProps = (
    name: keyof ProductFormValues
  ): ComponentProps<typeof FormInput<ProductFormValues>> => ({
    control,
    name,
    isError: Boolean(errors?.[name]?.message),
    height: errors?.[name]?.message,
  });

  if (data?.id && !hasRevalidatedPage?.current) {
    // generate product details page on server
    const serverAction = revalidateProductPage.bind(null, data?.id);
    serverAction();
    hasRevalidatedPage.current = true;
  }

  const uploadProduct = async (value: ProductFormValues) => {
    await createProduct({
      ...value,
      currencyCode: "$",
      currencySymbol: "USD",
      status: "ACTIVE",
    });
  };

  const resetForm = () => {
    reset();
    resetFields();
    hasRevalidatedPage.current = false;
  };

  const handleImageInput = (url?: string) => {
    setValue("imageLocation", url || "");
  };

  if (data?.id) {
    return (
      <MotionDiv
        initial={{ y: 20, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-[30vh] flex justify-center items-center flex-col gap-6"
      >
        <Link href={`/${data?.id}`} className="w-full">
          <Button variants="outline">
            <p>View product</p>
          </Button>
        </Link>
        <Button onClick={resetForm}>
          <p>Add another product</p>
        </Button>
      </MotionDiv>
    );
  }

  return (
    <form onSubmit={handleSubmit(uploadProduct)} className="grid gap-y-4 px-4">
      <FormInput {...inputProps("name")} label="Name" />
      <FormInput
        {...inputProps("description")}
        isTextArea
        label="Description"
      />
      <ImageInput
        {...inputProps("imageLocation")}
        label="Image"
        onDelete={handleImageInput}
        onUpload={handleImageInput}
      />
      <FormInput {...inputProps("price")} label="Price" />
      <FormInput {...inputProps("quantity")} label="Quantity" type="number" />
      {isError && (
        <p className="text-red-600 font-semibold text-center">
          An error occurred while uploading product
        </p>
      )}
      <Button
        disabled={isLoading}
        type="submit"
        className="mt-4 disabled:bg-zinc-700 h-14"
      >
        <AnimatePresence mode="wait">
          <MotionP
            key={buttonLabel}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
          >
            {buttonLabel}
          </MotionP>
        </AnimatePresence>
      </Button>
    </form>
  );
}

export default ProductForm;
