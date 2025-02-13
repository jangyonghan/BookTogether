import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import styled from "styled-components";
import { useCalendarStore } from "../store/useCalendarStore";
import { timeMockData } from "@/src/components/mock/timeMockdata";
import { useRoomStore } from "../store/useRoomStore";

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
  const { selectedRoom } = useRoomStore();

  //회의실별 데이터 가져오기
  const filteredEvents = timeMockData.filter(
    (event) => event.roomId === selectedRoom
  );
  console.log(filteredEvents);

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
        events={filteredEvents}
        slotMinTime="09:00:00" // 9:00 AM부터 시작
        slotMaxTime="23:59:00" // 12:00 AM까지 표시
        height="auto"
        contentHeight="auto"
      />
    </CalendarWrapper>
  );
};

export default MyCalendar;
