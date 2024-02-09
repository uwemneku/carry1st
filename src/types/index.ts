export type IProduct = {
  id: number;
  name: string;
  description: string;
  price: number;
  currencyCode: string;
  currencySymbol: string;
  quantity: number;
  imageLocation: string;
  status: "ACTIVE" | "INACTIVE";
};
