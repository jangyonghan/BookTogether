import { DayPicker } from "react-day-picker";
import { ko } from "react-day-picker/locale";
import Css from "./style/calenderStyle";
import dayjs from "dayjs";
import { useCalendarStore } from "../store/useCalendarStore";

export default function Calendar() {
  const { selectedDate, setSelectedDate } = useCalendarStore();

  const today = new Date();
  const modifiers = {
    toDay: today,
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
      console.log("선택한 날짜:", formattedDate);
    }
  };

  return (
    <>
      <style>{Css}</style>
      <DayPicker
        locale={ko}
        mode="single"
        selected={dayjs(selectedDate).toDate()}
        onSelect={handleSelect}
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
        showOutsideDays
      />
    </>
  );
}
