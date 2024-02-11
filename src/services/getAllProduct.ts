import { IProduct } from "@/types";
import { delay } from "./util";

async function getAllProduct() {
  // Add to simulate loading state;
  // await delay(10000);
  const res = await fetch(
    "https://my-json-server.typicode.com/carry1stdeveloper/mock-product-api/productBundles",
    { cache: "no-cache" }
  );
  const products: IProduct[] = await res.json();
  if (!res?.ok) {
    throw new Error(res.statusText);
  }
  return products;
}

export default getAllProduct;
