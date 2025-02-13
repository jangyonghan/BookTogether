import { create } from "zustand";

interface RoomState {
  selectedRoom: string;
  setSelectedRoom: (roomId: string) => void;
}

export const useRoomStore = create<RoomState>((set) => ({
  selectedRoom: "67a9f4be3e23e5a6c9fd2785",
  setSelectedRoom: (roomId) => set({ selectedRoom: roomId }), // 선택한 회의실 업데이트
}));
