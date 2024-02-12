"use client";

import React, { forwardRef } from "react";
import InputLayout, { InputLayoutProps } from "./InputLayout";

interface Props
  extends InputLayoutProps,
    React.DetailedHTMLProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    > {}

const BaseTextArea = forwardRef<HTMLTextAreaElement, Props>(function Input(
  { label, isError, helperText, leftAdornment, ...props },
  ref
) {
  const layoutProps = { label, isError, helperText, leftAdornment };
  return (
    <InputLayout {...layoutProps}>
      <textarea
        className="block w-full outline-0 flex-1 focus:outline-0"
        ref={ref}
        {...props}
      />
    </InputLayout>
  );
});

export default BaseTextArea;
