import { InferType, number, object, string } from "yup";

export const productFormValidation = object().shape({
  name: string().required("This field is required"),
  description: string().required("This field is required"),
  price: number()
    .required("This field is required")
    .typeError("This field should be a number"),
  quantity: number()
    .required("This field is required")
    .typeError("This field should be a number"),
  imageLocation: string().required("This field is required"),
});

export type ProductFormValues = InferType<typeof productFormValidation>;
