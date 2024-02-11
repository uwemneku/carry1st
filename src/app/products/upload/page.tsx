import ProductForm from "@/features/product/Form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upload product | Carry1st shop",
  description: "Upload new products to your carry1st shop",
};

function UploadPage() {
  return (
    <div className="max-w-xl mx-auto pb-20">
      <h2 className="text-center font-bold text-lg md:text-xl mb-4">
        Add a new product
      </h2>
      <ProductForm />
    </div>
  );
}

export default UploadPage;
