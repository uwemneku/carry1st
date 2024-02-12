import { handleResponseError } from "@/lib/util";
import { IProduct } from "@/types";

async function getAllProduct() {
  const res = await fetch(
    `${process.env?.NEXT_PUBLIC_API_BASE_URL}/productBundles`
  );
  handleResponseError(res);
  const products: IProduct[] = await res.json();
  return products;
}

export default getAllProduct;
