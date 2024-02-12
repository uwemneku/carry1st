import Skeleton from "@/components/util/Skeleton";
import ProductForm from "@/features/product/Form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upload product | Carry1st shop",
  description: "Upload new products to your carry1st shop",
};

function UploadPage() {
  return (
    <>
      <h2 className="text-center font-bold text-lg md:text-xl mb-4">
        Add a new product
      </h2>
      <ProductForm />
    </>
  );
}

export default UploadPage;
