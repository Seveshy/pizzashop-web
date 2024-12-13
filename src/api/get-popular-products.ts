import { api } from "../lib/axios";

export type GetPopuplarProductsResponse = {
  product: string;
  amount: number;
}[];

export async function getPopularProducts() {
  const response = await api.get<GetPopuplarProductsResponse>(
    "/metrics/popular-products",
  );

  return response.data;
}
