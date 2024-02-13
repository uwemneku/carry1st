"use client";
import React, { ChangeEventHandler, ComponentProps, useState } from "react";
import { FieldValues, useController } from "react-hook-form";
import FormInput from "./FormInput";
import useUploadImage from "@/lib/hooks/useUploadImage";
import { twMerge } from "tailwind-merge";

interface Props<T extends FieldValues>
  extends Omit<ComponentProps<typeof FormInput<T>>, "type" | "accept"> {
  onDelete(): void;
  onUpload(url: string): void;
}

const ImageInput = <T extends FieldValues>({
  control,
  name,
  onDelete,
  onUpload,
  ...props
}: Props<T>) => {
  const {
    fieldState: { error },
  } = useController({ control, name });
  const { uploadImage, isLoading, isError, data, reset } = useUploadImage();
  const [fileUri, setFileUri] = useState<string>();

  const errorMessage =
    Boolean(error?.message) && isLoading
      ? "Cannot submit form when image is uploading"
      : isError
      ? "There was an error uploading image"
      : "";

  if (data?.url) {
    onUpload(data.url);
    reset();
  }

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (!file || Boolean(fileUri)) return;
    const reader = new FileReader();
    reader.onload = function (upload) {
      const uri = upload.target?.result;
      if (typeof uri === "string") {
        setFileUri(uri);
        const formData = new FormData();
        formData.append("image", file);
        uploadImage(formData);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDelete = () => {
    setFileUri("");
    onDelete();
  };
  return fileUri ? (
    <div>
      <div
        className={
          "p-2 rounded-md border-2 border-black flex items-center pr-4 gap-6"
        }
      >
        <img
          className="w-20 h-20 bg-cover rounded-md"
          alt="Uploaded image"
          src={fileUri}
        />
        <div className="flex-1" />
        {isLoading && (
          <div className="w-6 h-6 border-t-2 border-l-2 border-black rounded-full animate-spin" />
        )}
        <button
          type="button"
          onClick={handleDelete}
          className="w-6 h-6 rounded-full border-2 border-red-600 flex justify-around items-center"
        >
          <span className="text-red-600 text-sm">X</span>
        </button>
      </div>
      {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}
    </div>
  ) : (
    <FormInput<T>
      name={name}
      control={control}
      type="file"
      accept="image/*"
      onChange={handleFileChange}
    />
  );
};

export default ImageInput;
