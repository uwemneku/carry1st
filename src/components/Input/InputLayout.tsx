"use client";

import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export interface InputLayoutProps {
  isError?: boolean;
  helperText?: string;
  label?: string;
  leftAdornment?: JSX.Element;
}

const InputLayout = ({
  label,
  isError,
  helperText,
  leftAdornment,
  children,
}: PropsWithChildren<InputLayoutProps>) => {
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
          {children}
        </div>
        {helperText && (
          <p className="px-[0.5px] mt-1 font-medium text-sm">{helperText}</p>
        )}
      </div>
    </div>
  );
};

export default InputLayout;
