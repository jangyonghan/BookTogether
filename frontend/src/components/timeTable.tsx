import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import styled from "styled-components";
import { useCalendarStore } from "../store/useCalendarStore";
import { useRoomStore } from "../store/useRoomStore";
import { useReservation } from "../hook/useReservation";

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
  const { data } = useReservation();

  const reservationData = Array.isArray(data) ? data : [data];
  console.log(reservationData);

  //회의실별 데이터 가져오기
  const filteredEvents = reservationData.filter(
    (event) => event.roomId === selectedRoom
  );

  const formattedEvents = filteredEvents.map((event) => ({
    title: event.title,
    start: event.startTime,
    end: event.endTime,
    id: event._id,
  }));

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
            duration: { days: 3 },
            buttonText: "3일 보기",
          },
        }}
        initialDate={selectedDate} // 초기날짜
        events={formattedEvents}
        slotMinTime="09:00:00"
        slotMaxTime="23:59:00"
        height="auto"
        contentHeight="auto"
      />
    </CalendarWrapper>
  );
};

export default MyCalendar;
