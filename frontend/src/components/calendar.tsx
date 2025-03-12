import { DayPicker } from "react-day-picker";
import { ko } from "react-day-picker/locale";
import "react-day-picker/style.css";
import dayjs from "dayjs";
import { useCalendarStore } from "../store/useCalendarStore";
import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledDayPicker = styled.div`
  .rdp-root {
    --rdp-accent-color: #e0518b;
  }
  .rdp-day_selected {
    background-color: #e0518b !important;
    color: white !important;
    border-radius: 50%;
  }
  .rdp-caption_label {
    font-size: 24px;
  }
`;

export default function Calendar() {
  const { selectedDate, setSelectedDate } = useCalendarStore();

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    setSelectedDate(dayjs().format("YYYY-MM-DD")); // 초기값 설정
  }, []);

  if (!hydrated) return null; // Hydration 완료 전에는 렌더링하지 않음

  const modifiersStyles = {
    selected: {
      color: "white",
      backgroundColor: "#E0518B",
      borderRadius: "50%",
      padding: "1px",
    },
  };

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
          key={selectedDate}
          locale={ko}
          mode="single"
          selected={dayjs(selectedDate).toDate()}
          onSelect={handleSelect}
          modifiers={modifiers}
          modifiersStyles={modifiersStyles}
          showOutsideDays
        />
      </StyledDayPicker>
    </>
  );
}
