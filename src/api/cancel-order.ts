import { api } from "../lib/axios";

export interface CencelOrderParams {
  orderId: string;
}

export async function cancelOrder({ orderId }: CencelOrderParams) {
  await api.patch(`/orders/${orderId}/cancel`);
}
