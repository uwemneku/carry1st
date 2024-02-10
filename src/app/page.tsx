import ProductCard from "@/components/cards/ProductCard";
import getProduct from "@/services/getProduct";
import Link from "next/link";
import React from "react";

async function Home() {
  const products = (await getProduct()) || [];

  return (
    <section>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-6 items-center">
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
