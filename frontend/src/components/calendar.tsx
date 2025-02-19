import { DayPicker } from "react-day-picker";
import { ko } from "react-day-picker/locale";

import dayjs from "dayjs";
import { useCalendarStore } from "../store/useCalendarStore";
import styled from "styled-components";
import { useEffect } from "react";

export default function Calendar() {
  const { selectedDate, setSelectedDate } = useCalendarStore();

  useEffect(() => {
    const today = dayjs().format("YYYY-MM-DD");
    if (selectedDate !== today) {
      setSelectedDate(today);
    }
  }, []);

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
