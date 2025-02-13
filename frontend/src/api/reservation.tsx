import { AxiosInstance } from "../lib/axiosInstance";

export const fetchReservation = async () => {
  const response = await AxiosInstance.get("reservation");
  return response.data;
};
