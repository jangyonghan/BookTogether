import { AxiosInstance } from "../lib/axiosInstance";

export const fetchBible = async () => {
  const response = await AxiosInstance.get("bible?count=1");
  return response.data[0];
};
