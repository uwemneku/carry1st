"use client";
import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import tw from "tailwind-styled-components";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /**@default filled */
  variants?: "filled" | "outline";
}

function Button({ variants = "filled", className = "", ...props }: Props) {
  const isFilled = variants === "filled";
  return (
    <Container
      className={twMerge(
        isFilled
          ? "bg-black text-white"
          : "border-2 border-black text-gray-900",
        className
      )}
      {...props}
    />
  );
}

const Container = tw.button`block active:scale-[0.98] transition-transform py-3 w-full`;

export default Button;
