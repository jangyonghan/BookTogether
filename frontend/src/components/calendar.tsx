import { DayPicker } from "react-day-picker";
import { ko } from "react-day-picker/locale";
import "react-day-picker/style.css";
import dayjs from "dayjs";
import { useCalendarStore } from "../store/useCalendarStore";
import styled from "styled-components";
import { useEffect } from "react";

const StyledDayPicker = styled.div`
  .rdp-root {
    --rdp-accent-color: #e0518b;
  }
`;

export default function Calendar() {
  const { selectedDate, setSelectedDate } = useCalendarStore();

  useEffect(() => {
    const today = dayjs().format("YYYY-MM-DD");
    if (selectedDate !== today) {
      setSelectedDate(today);
    }
  }, []);

  useEffect(() => {
    console.log("selectedDate 변경됨:", selectedDate);
  }, [selectedDate]);

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
