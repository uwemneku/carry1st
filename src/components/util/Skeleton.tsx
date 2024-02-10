import React, { HtmlHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {}

function Skeleton({ className = "", ...props }: Props) {
  return (
    <div
      className={twMerge("bg-zinc-600 animate-pulse", className)}
      {...props}
    />
  );
}

export default Skeleton;
