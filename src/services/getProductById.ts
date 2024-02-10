import { IProduct } from "@/types";

async function getProductById(id: string) {
  const res = await fetch(
    `https://my-json-server.typicode.com/carry1stdeveloper/mock-product-api/productBundles/${id}`
  );
  const products: IProduct = await res.json();
  if (!res?.ok) {
    throw new Error(res?.status.toString());
  }
  return products;
}

export default getProductById;
