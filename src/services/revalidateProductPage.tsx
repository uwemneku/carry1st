"use server";
import { revalidatePath } from "next/cache";

export default async function revalidateProductPage(id: number) {
  revalidatePath(`/${id}`, "page");
}
