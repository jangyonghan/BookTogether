import { useQuery } from "@tanstack/react-query";
import { fetchRooms } from "../api/roomsAPI";

interface defaultRoomsType {
  name: string;
  capacity: number;
  bgColor: string;
  createdAt: Date;
  updateAt: Date;
}

export const useRooms = () => {
  return useQuery<defaultRoomsType>({
    queryKey: ["rooms"],
    queryFn: fetchRooms,
  });
};
