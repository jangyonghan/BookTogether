import { DayPicker } from "react-day-picker";
import { ko } from "react-day-picker/locale";
import "react-day-picker/style.css";
import dayjs from "dayjs";
import { useCalendarStore } from "../store/useCalendarStore";
import styled from "styled-components";

const StyledDayPicker = styled.div`
  .rdp-root {
    --rdp-accent-color: #e0518b;
  }
`;

export default function Calendar() {
  const { selectedDate, setSelectedDate } = useCalendarStore();

  const today = new Date();
  const modifiers = {
    toDay: today,
  };

  const handleSelect = (date: Date | undefined) => {
    if (date) {
      const formattedDate = dayjs(date).format("YYYY-MM-DD");
      setSelectedDate(formattedDate);
    }
  };

  return (
    <>
      <StyledDayPicker>
        <DayPicker
          locale={ko}
          mode="single"
          selected={dayjs(selectedDate).toDate()}
          onSelect={handleSelect}
          modifiers={modifiers}
          showOutsideDays
        />
      </StyledDayPicker>
    </>
  );
}
