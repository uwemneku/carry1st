import getProduct from "@/services/product/getProduct";
import React from "react";

async function Home() {
  const products = await getProduct();

  return <div>Home</div>;
}

export default Home;
