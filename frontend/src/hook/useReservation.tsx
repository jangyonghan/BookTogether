import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchReservation, fetchReservationAdd } from "../api/reservation";
import { fetchReservationAddProps } from "../types/reservationAddType";

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

export const useReservationAdd = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      roomId,
      title,
      startTime,
      endTime,
      booker,
    }: fetchReservationAddProps) =>
      fetchReservationAdd({
        roomId,
        title,
        startTime,
        endTime,
        booker,
      }),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["reservation"] });
    },
  });
};
