import { DayPicker } from "react-day-picker";
import { ko } from "react-day-picker/locale";
import "react-day-picker/style.css";
import dayjs from "dayjs";
import { useCalendarStore } from "../store/useCalendarStore";
import { useEffect } from "react";
import styled from "styled-components";

const StyledDayPicker = styled.div`
  .rdp-root {
    --rdp-accent-color: #e0518b;
  }
`;

export default function Calendar() {
  const { selectedDate, setSelectedDate } = useCalendarStore();

  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);

  const todayKST = new Date();
  todayKST.setHours(0, 0, 0, 0);

  const modifiers = {
    toDay: todayKST,
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
      <StyledDayPicker>
        <DayPicker
          locale={ko}
          mode="single"
          selected={new Date(selectedDate)}
          onSelect={handleSelect}
          modifiers={modifiers}
          modifiersStyles={modifiersStyles}
          showOutsideDays
        />
      </StyledDayPicker>
    </>
  );
}
