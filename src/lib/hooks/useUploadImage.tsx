"use client";
import { useMutation } from "react-query";
import { delay } from "../util";
function useUploadImage() {
  const mutation = useMutation({
    async mutationFn(args: FormData) {
      await delay(2000);
      const jsonResponse = {
        url: "https://dev-images-carry1st-products.s3.eu-west-2.amazonaws.com/74e517a3-0615-4019-bb08-cc697cf4e747.png",
      };
      return jsonResponse;
    },
  });
  return { ...mutation, uploadImage: mutation.mutate };
}

export default useUploadImage;
