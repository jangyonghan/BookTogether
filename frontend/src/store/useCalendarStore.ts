import { create } from "zustand";
import dayjs from "dayjs";

interface CalendarState {
  selectedDate: string; // 문자열 타입으로 저장
  setSelectedDate: (date: string) => void; // string을 받도록 변경
}

export const useCalendarStore = create<CalendarState>((set) => ({
  selectedDate: dayjs().startOf("day").format("YYYY-MM-DD"), // 초기값을 YYYY-MM-DD 형식의 문자열로 저장
  setSelectedDate: (date) => set({ selectedDate: date }), // 문자열만 받도록 수정
}));
