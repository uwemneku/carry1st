"use client";
import React, { ComponentProps } from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";
import BaseInput from "./BaseInput";
import BaseTextArea from "./BaseTextArea";

interface Props<T extends FieldValues>
  extends Omit<ComponentProps<typeof BaseInput>, "name"> {
  name: Path<T>;
  control: Control<T>;
  isTextArea?: boolean;
}

const FormInput = <T extends FieldValues>({
  name,
  control,
  isTextArea,
  ...props
}: Props<T>) => {
  const { field, fieldState } = useController({ name, control });
  const Component = (isTextArea ? BaseTextArea : BaseInput) as typeof BaseInput;
  return (
    <Component
      isError={Boolean(fieldState.error?.message)}
      helperText={fieldState.error?.message}
      {...props}
      {...field}
    />
  );
};

export default FormInput;
