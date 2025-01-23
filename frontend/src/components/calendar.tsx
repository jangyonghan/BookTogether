import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { ko } from "react-day-picker/locale";
import Css from "./calenderStyle";

export default function Calendar() {
  const [selected, setSelected] = useState<Date>();

  const modifiers = {
    toDay: new Date(),
  };

  const modifiersStyles = {
    toDay: {
      color: "white",
      backgroundColor: "#E0518B",
      borderRadius: "50%",
      padding: "1px",
    },
  };

  const monthCaptionStyle = {
    borderBottom: "1px solid currentColor",
    paddingBottom: "0.5em",
  };

  const month = {
    color: "red",
  };

  return (
    <>
      <style>{Css}</style>
      <DayPicker
        locale={ko}
        mode="single"
        selected={selected}
        onSelect={setSelected}
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
        showOutsideDays
      />
    </>
  );
}
