"use client";

import Button from "@/components/button";

interface Props {
  id: string;
}

function BuyButton({ id }: Props) {
  return (
    <Button variants="outline" className="text-center">
      <p className="font-medium">Buy Now</p>
    </Button>
  );
}

export default BuyButton;
