import { IProduct } from "@/types";

async function getProductById(id: string) {
  try {
    const res = await fetch(
      `https://my-json-server.typicode.com/carry1stdeveloper/mock-product-api/productBundles/${id}`
    );
    const products: IProduct = await res.json();
    return products;
  } catch (error) {
    return { error };
  }
}

export default getProductById;
