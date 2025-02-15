import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

interface TimePickerValueProps {
  startTime: Dayjs | null;
  setStartTime: (value: Dayjs | null) => void;
  endTime: Dayjs | null;
  setEndTime: (value: Dayjs | null) => void;
}

export default function TimePickerValue({
  startTime,
  setStartTime,
  endTime,
  setEndTime,
}: TimePickerValueProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["TimePicker", "TimePicker"]}>
        <TimePicker
          label="시작 시간"
          value={startTime}
          onChange={setStartTime}
        />
        <TimePicker label="종료 시간" value={endTime} onChange={setEndTime} />
      </DemoContainer>
    </LocalizationProvider>
  );
}
