import { IProduct } from "@/types";
import { delay } from "./util";

async function getAllProduct() {
  // await delay(10000) Add to simulate loading state;
  const res = await fetch(
    "https://my-json-server.typicode.com/carry1stdeveloper/mock-product-api/productBundles"
  );
  const products: IProduct[] = await res.json();
  if (!res?.ok) {
    throw new Error(res.statusText);
  }
  return products;
}

export default getAllProduct;
