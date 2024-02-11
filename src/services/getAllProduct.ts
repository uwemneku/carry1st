import { IProduct } from "@/types";

async function getAllProduct() {
  const res = await fetch(`${process.env?.API_BASE_URL}/productBundles`, {
    cache: "no-cache",
  });
  const products: IProduct[] = await res.json();
  if (!res?.ok) {
    throw new Error(res.statusText);
  }
  return products;
}

export default getAllProduct;
