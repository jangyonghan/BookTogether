import { create } from "zustand";

interface RoomState {
  selectedRoom: string;
  setSelectedRoom: (room: string) => void;
}

export const useRoomStore = create<RoomState>((set) => ({
  selectedRoom: "회의실1",
  setSelectedRoom: (room) => set({ selectedRoom: room }), // 선택한 회의실 업데이트
}));
