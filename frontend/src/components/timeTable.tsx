import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import styled from "styled-components";
import { useCalendarStore } from "../store/useCalendarStore";

const CalendarWrapper = styled.div`
  .fc-event {
    background-color: red;
    color: black;
    border: none;
  }
  .fc-toolbar-title {
    font-size: 18px;
    font-weight: bold;
  }

  .fc-view-container {
    height: auto;
  }
`;

const MyCalendar = () => {
  const { selectedDate } = useCalendarStore();

  const events = [
    {
      title: "김두한: 회의",
      start: "2025-02-13T10:00:00",
      end: "2025-02-13T12:00:00",
    },
    {
      title: "장용한: 피드백",
      start: "2025-02-09T11:00:00",
      end: "2025-02-09T12:00:00",
    },
    {
      title: "김윤길: 회의",
      start: "2025-02-10T15:00:00",
      end: "2025-02-10T16:00:00",
    },
  ];

  console.log("selectedDate:", selectedDate);

  return (
    <CalendarWrapper>
      <FullCalendar
        key={selectedDate}
        locale={"ko"}
        plugins={[timeGridPlugin]}
        initialView="timeGridThreeDay"
        headerToolbar={false}
        views={{
          timeGridThreeDay: {
            type: "timeGrid",
            duration: { days: 3 }, // 3일간 보기
            buttonText: "3일 보기",
          },
        }}
        initialDate={selectedDate} // 초기 날짜 설정
        events={events}
        slotMinTime="09:00:00" // 9:00 AM부터 시작
        slotMaxTime="23:59:00" // 12:00 AM까지 표시
        height="auto"
        contentHeight="auto"
      />
    </CalendarWrapper>
  );
};

export default MyCalendar;
