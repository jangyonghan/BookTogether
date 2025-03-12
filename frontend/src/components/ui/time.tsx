import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import styled from "styled-components";

interface TimePickerValueProps {
  startTime: Dayjs | null;
  setStartTime: (value: Dayjs | null) => void;
  endTime: Dayjs | null;
  setEndTime: (value: Dayjs | null) => void;
}

const TimePickerDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export default function TimePickerValue({
  startTime,
  setStartTime,
  endTime,
  setEndTime,
}: TimePickerValueProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["TimePicker", "TimePicker"]}>
        <TimePickerDiv>
          <TimePicker
            label="시작 시간"
            value={startTime}
            onChange={setStartTime}
            ampm={false} // 24시간 형식
            desktopModeMediaQuery="(max-width: 1024px)"
          />
          <TimePicker
            label="종료 시간"
            ampm={false} // 24시간 형식
            desktopModeMediaQuery="(max-width: 1024px)"
            value={endTime}
            onChange={setEndTime}
          />
        </TimePickerDiv>
      </DemoContainer>
    </LocalizationProvider>
  );
}
