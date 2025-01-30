import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

interface TimePickerValueProps {
  value: Dayjs | null;
  onChange: (value: Dayjs | null) => void;
}

export default function TimePickerValue({
  value,
  onChange,
}: TimePickerValueProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["TimePicker", "TimePicker"]}>
        <TimePicker />
        <TimePicker value={value} onChange={onChange} />
      </DemoContainer>
    </LocalizationProvider>
  );
}
