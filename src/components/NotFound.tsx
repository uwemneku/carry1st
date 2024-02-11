"use client";

import Button from "@/components/button";
import Link from "next/link";

interface Props {
  title: string;
}

export default function NotFound({ title }: Props) {
  return (
    <div className="flex flex-col justify-center items-center h-full flex-1 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="5em"
        height="5em"
        viewBox="0 0 24 24"
        className="stroke-red-600"
      >
        <path
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 7v4a1 1 0 0 0 1 1h3m0-5v10m3-7v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2m0-4V8a1 1 0 0 0-1-1h-2m6 0v4a1 1 0 0 0 1 1h3m0-5v10M3 3l18 18"
        />
      </svg>
      <h2 className="font-bold text-2xl md:text-4xl">{title}</h2>
      <Link href={"/"} className="w-full md:w-1/2 mt-6">
        <Button>
          <p>Go Home</p>
        </Button>
      </Link>
    </div>
  );
}
