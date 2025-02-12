import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import styled from "styled-components";

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
  const [events, setEvents] = useState([
    {
      title: "김두한: 회의",
      start: "2024-02-08T10:00:00",
      end: "2024-02-08T12:00:00",
    },
    {
      title: "장용한: 피드백",
      start: "2024-02-09T11:00:00",
      end: "2024-02-09T12:00:00",
    },
    {
      title: "김윤길: 회의",
      start: "2024-02-10T15:00:00",
      end: "2024-02-10T16:00:00",
    },
  ]);

  return (
    <CalendarWrapper>
      <FullCalendar
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
        initialDate="2024-02-08" // 초기 날짜 설정
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
