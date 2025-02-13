import { useQuery } from "@tanstack/react-query";
import { fetchReservation } from "../api/reservation";

interface defaultReservationType {
  title: string;
  description: string;
  roomId: string;
  startTime: Date;
  endTime: Date;
}

export const useReservation = () => {
  return useQuery<defaultReservationType>({
    queryKey: ["reservation"],
    queryFn: fetchReservation,
  });
};
