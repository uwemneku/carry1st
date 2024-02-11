"use client";

import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  isError?: boolean;
  helperText?: string;
  label?: string;
}

const BaseTextArea = forwardRef<HTMLTextAreaElement, Props>(function Input(
  { label, isError, helperText, ...props },
  ref
) {
  return (
    <div className="grid gap-1 md:gap-2">
      <p className="font-semibold px-[0.5px] md:text-base">{label}</p>
      <div>
        <div
          className={twMerge(
            "border-2 rounded-md p-2",
            isError ? "border-red-600" : "border-zinc-500"
          )}
        >
          <textarea className="block w-full outline-0" ref={ref} {...props} />
        </div>
        {helperText && (
          <p className="px-[0.5px] mt-1 font-medium text-sm">{helperText}</p>
        )}
      </div>
    </div>
  );
});

export default BaseTextArea;
