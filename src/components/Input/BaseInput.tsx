"use client";

import { forwardRef } from "react";
import InputLayout, { InputLayoutProps } from "./InputLayout";

interface Props
  extends InputLayoutProps,
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    > {}

const BaseInput = forwardRef<HTMLInputElement, Props>(function Input(
  { label, isError, helperText, leftAdornment, ...props },
  ref
) {
  const layoutProps = { label, isError, helperText, leftAdornment };
  return (
    <InputLayout {...layoutProps}>
      <input
        className="block w-full outline-0 flex-1 focus:outline-0"
        ref={ref}
        {...props}
      />
    </InputLayout>
  );
});

export default BaseInput;
