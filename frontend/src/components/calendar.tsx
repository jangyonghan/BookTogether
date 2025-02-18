import { DayPicker } from "react-day-picker";
import { ko } from "react-day-picker/locale";
import Css from "./style/calenderStyle";
import dayjs from "dayjs";
import { useCalendarStore } from "../store/useCalendarStore";

export default function Calendar() {
  const { selectedDate, setSelectedDate } = useCalendarStore();

  const todayKST = new Date();
  todayKST.setHours(0, 0, 0, 0);

  const modifiers = {
    toDay: todayKST, // ✅ 오늘 날짜를 KST 기준으로 저장
  };

  const modifiersStyles = {
    toDay: {
      color: "white",
      backgroundColor: "#E0518B",
      borderRadius: "50%",
      padding: "1px",
    },
  };

  const handleSelect = (date: Date | undefined) => {
    if (date) {
      const formattedDate = dayjs(date).format("YYYY-MM-DD");
      setSelectedDate(formattedDate);
    }
  };

  return (
    <>
      <style>{Css}</style>
      <DayPicker
        locale={ko}
        mode="single"
        selected={new Date(selectedDate)}
        onSelect={handleSelect}
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
        showOutsideDays
      />
    </>
  );
}
