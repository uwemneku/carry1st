import { IProduct } from "@/types";
import { notFound } from "next/navigation";

async function getProductById(id: string) {
  const res = await fetch(`${process.env?.API_BASE_URL}/productBundles/${id}`, {
    cache: "no-cache",
  });
  const products: IProduct = await res.json();
  const is404Error = res?.status === 404;
  if (!res?.ok) {
    if (is404Error) notFound();
    throw new Error(res?.status.toString());
  }
  return products;
}

export default getProductById;
