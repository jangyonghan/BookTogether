import { DayPicker } from "react-day-picker";
import { ko } from "react-day-picker/locale";
import "react-day-picker/style.css";
import dayjs from "dayjs";
import { useCalendarStore } from "../store/useCalendarStore";
import styled from "styled-components";

const StyledDayPicker = styled.div`
  .rdp-root {
    --rdp-accent-color: #transparent;
  }
`;

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
    range_start: {
      border: "none",
      backgroundColor: "transparent",
      color: "inherit",
      borderRadius: "50%",
    },
    range_end: {
      border: "none",
      backgroundColor: "transparent",
      color: "inherit",
      borderRadius: "50%",
    },
    range_middle: {
      backgroundColor: "#E0518B",
      color: "white",
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
      <StyledDayPicker>
        <DayPicker
          locale={ko}
          mode="range"
          modifiers={modifiers}
          modifiersStyles={modifiersStyles}
          showOutsideDays
        />
      </StyledDayPicker>
    </>
  );
}
