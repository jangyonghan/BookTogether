import { AxiosInstance } from "../lib/axiosInstance";
import { fetchReservationAddProps } from "../types/reservationAddType";

export const fetchReservation = async () => {
  const response = await AxiosInstance.get("reservation");
  return response.data;
};

export const fetchReservationAdd = async ({
  roomId,
  title,
  startTime,
  endTime,
  booker,
}: fetchReservationAddProps) => {
  const response = await AxiosInstance.post(`reservation/${roomId}`, {
    title,
    startTime,
    endTime,
    booker,
  });
  return response.data;
};
