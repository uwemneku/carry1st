"use client";

import FormInput from "@/components/Input/FormInput";
import Button from "@/components/button";
import {
  ProductFormValues,
  productFormValidation,
} from "@/features/product/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { ComponentProps } from "react";
import { useForm } from "react-hook-form";

function UploadPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productFormValidation),
  });
  const inputProps = (
    name: keyof ProductFormValues
  ): ComponentProps<typeof FormInput<ProductFormValues>> => ({
    control,
    name,
    isError: Boolean(errors?.[name]?.message),
    height: errors?.[name]?.message,
  });
  return (
    <div className="max-w-xl mx-auto pb-20">
      <h2 className="text-center font-bold text-lg md:text-xl mb-4">
        Add a new product
      </h2>
      <form onSubmit={handleSubmit((e) => {})} className="grid gap-y-4 px-4">
        <FormInput {...inputProps("name")} label="Name" />
        <FormInput
          {...inputProps("description")}
          isTextArea
          label="Description"
        />
        <FormInput {...inputProps("imageLocation")} label="Image" type="file" />
        <FormInput {...inputProps("price")} label="Price" />
        <FormInput {...inputProps("quantity")} label="Quantity" type="number" />
        <Button type="submit" className="mt-4">
          <p>Add Product</p>
        </Button>
      </form>
    </div>
  );
}

export default UploadPage;
