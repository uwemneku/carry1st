import getProduct from "@/services/product/getProduct";
import Image from "next/image";
import React, { useState } from "react";

async function Home() {
  const apiResponse = await getProduct();
  const products = apiResponse?.products || [];

  return (
    <div>
      {products.map((i) => (
        <div key={i.id}>
          <Image fill alt={i.name} src={i.imageLocation} />
        </div>
      ))}
    </div>
  );
}

export default Home;
