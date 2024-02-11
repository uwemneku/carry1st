"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const path = "/products/upload";

const PlusIcon = () => {
  const pathname = usePathname();
  const hideButton = pathname.startsWith(path);

  if (hideButton) return null;

  return (
    <Link href={path}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 48 48"
      >
        <defs>
          <mask id="ipSAdd0">
            <g fill="none" strokeLinejoin="round" strokeWidth="4">
              <rect
                width="36"
                height="36"
                x="6"
                y="6"
                fill="#fff"
                stroke="#fff"
                rx="3"
              />
              <path stroke="#000" strokeLinecap="round" d="M24 16v16m-8-8h16" />
            </g>
          </mask>
        </defs>
        <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSAdd0)" />
      </svg>
    </Link>
  );
};

export default PlusIcon;
