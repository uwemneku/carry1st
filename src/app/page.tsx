import ProductCard from "@/components/ProductCard";
import getProduct from "@/services/product/getProduct";
import Link from "next/link";
import React from "react";

async function Home() {
  const apiResponse = await getProduct();
  const products = apiResponse?.products || [];

  console.log({ products });

  return (
    <section>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
        {products.map((i) => (
          <li key={i.id}>
            <Link href={`/products/${i.id}`}>
              <ProductCard
                id={i.id}
                imageLocation={i.imageLocation}
                name={i.name}
                price={i.price}
                currencySymbol={i.currencySymbol}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;
