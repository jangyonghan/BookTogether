import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { ko } from "react-day-picker/locale";
import Css from "./style/calenderStyle";
import dayjs from "dayjs";

export default function Calendar() {
  const [selected, setSelected] = useState<Date>();

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

  const week = (date: Date | undefined) => {
    return dayjs(date).locale("ko").format("ddd");
  };

  const day = (date: Date | undefined) => {
    return dayjs(date).locale("ko").format("D");
  };

  const handleSelect = (date: Date | undefined) => {
    setSelected(date);
    console.log(week(date));
    console.log(day(date));
  };

  return (
    <>
      <style>{Css}</style>
      <DayPicker
        locale={ko}
        mode="single"
        selected={selected}
        onSelect={handleSelect}
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
        showOutsideDays
      />
    </>
  );
}
