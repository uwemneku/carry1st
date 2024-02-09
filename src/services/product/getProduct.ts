import { IProduct } from "@/types";

async function getProduct() {
  try {
    const res = await fetch(
      "https://my-json-server.typicode.com/carry1stdeveloper/mock-product-api/productBundles"
    );
    const products: IProduct[] = await res.json();
    const status = res?.status;
    return { products, status };
  } catch (error) {
    return { error };
  }
}

export default getProduct;
