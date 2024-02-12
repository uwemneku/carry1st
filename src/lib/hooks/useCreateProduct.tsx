"use client";
import { useMutation } from "react-query";
import { IProduct } from "@/types";

function useCreateProduct() {
  const mutation = useMutation({
    async mutationFn(args: Omit<IProduct, "id">) {
      const res = await fetch(
        `${process?.env?.NEXT_PUBLIC_API_BASE_URL}/productBundles`,
        {
          body: JSON.stringify(args),
          method: "POST",
        }
      );
      const jsonResponse: { id: number } = await res.json();
      return jsonResponse;
    },
  });
  return { ...mutation, createProduct: mutation.mutate };
}

export default useCreateProduct;
