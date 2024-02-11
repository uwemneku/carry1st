"use client";

import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isError?: boolean;
  helperText?: string;
  label?: string;
  leftAdornment?: JSX.Element;
}

const BaseInput = forwardRef<HTMLInputElement, Props>(function Input(
  { label, isError, helperText, leftAdornment, ...props },
  ref
) {
  return (
    <div className="grid gap-1 md:gap-2">
      <p className="font-semibold px-[0.5px] md:text-base">{label}</p>
      <div>
        <div
          className={twMerge(
            "border-2 rounded-md p-2 flex flex-col gap-2 items-center",
            isError ? "border-red-600" : "border-zinc-500"
          )}
        >
          {leftAdornment}
          <input
            className="block w-full outline-0 flex-1"
            ref={ref}
            {...props}
          />
        </div>
        {helperText && (
          <p className="px-[0.5px] mt-1 font-medium text-sm">{helperText}</p>
        )}
      </div>
    </div>
  );
});

export default BaseInput;
