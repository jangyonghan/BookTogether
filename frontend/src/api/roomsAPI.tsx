import { AxiosInstance } from "../lib/axiosInstance";

export const fetchRooms = async () => {
  const response = await AxiosInstance.get("rooms");
  return response.data;
};
