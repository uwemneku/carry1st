import ProductCard from "@/components/cards/ProductCard";
import getAllProduct from "@/services/getAllProduct";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Carry1st Shop",
  description: "Carry1st Store",
};

async function Home() {
  const products = (await getAllProduct()) || [];

  return (
    <section>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-6 items-center">
        {products.map((i, index) => (
          <li key={i.id} style={{ zIndex: products.length - index }}>
            <Link href={`/${i.id}`}>
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
