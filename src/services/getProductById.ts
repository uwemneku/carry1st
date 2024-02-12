import { delay, handleResponseError } from "@/lib/util";
import { IProduct } from "@/types";

async function getProductById(id: string) {
  const res = await fetch(
    `${process.env?.NEXT_PUBLIC_API_BASE_URL}/productBundles/${id}`,
    { cache: "no-cache" }
  );
  await delay(2000);
  const products: IProduct = await res.json();
  handleResponseError(res);
  return products;
}

export default getProductById;
