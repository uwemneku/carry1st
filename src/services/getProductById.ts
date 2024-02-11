import { IProduct } from "@/types";
import { notFound } from "next/navigation";

async function getProductById(id: string) {
  const res = await fetch(
    `https://my-json-server.typicode.com/carry1stdeveloper/mock-product-api/productBundles/${id}`,
    { cache: "no-cache" }
  );
  const products: IProduct = await res.json();
  const is404Error = res?.status === 404;
  if (!res?.ok) {
    if (is404Error) notFound();
    throw new Error(res?.status.toString());
  }
  return products;
}

export default getProductById;
