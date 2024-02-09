import { IProduct } from "@/types";

async function getProduct() {
  const res = await fetch(
    "https://my-json-server.typicode.com/carry1stdeveloper/mock-product-api/productBundles"
  );
  const products: IProduct[] = await res.json();
  return products;
}

export default getProduct;
