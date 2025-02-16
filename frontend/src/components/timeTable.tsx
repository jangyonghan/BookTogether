import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import styled from "styled-components";
import { useCalendarStore } from "../store/useCalendarStore";
import { useRoomStore } from "../store/useRoomStore";
import { useReservation } from "../hook/useReservation";
import { useState } from "react";
import DeleteModal from "./ui/deleteModal";
import { EventClickArg } from "@fullcalendar/core";

const CalendarWrapper = styled.div`
  .fc-event {
    background-color: #e0418b;
    color: black;
    border: 1px solid #f5f5f5;
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReservationId, setSelectedReservationId] = useState<
    string | null
  >(null);

  const reservationData = Array.isArray(data) ? data : [data];

  //회의실별 데이터
  const filteredEvents = reservationData.filter(
    (event) => event?.roomId === selectedRoom
  );

  const formattedEvents = filteredEvents.map((event) => ({
    id: event._id,
    title: `${event.booker} - ${event.title}`,
    start: event.startTime,
    end: event.endTime,
  }));

  const handelClickEvent = (clickInfo: EventClickArg) => {
    console.log(clickInfo.event.id);
    setSelectedReservationId(clickInfo.event.id);
    setIsModalOpen(true);
  };

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
        eventClick={handelClickEvent}
      />

      {isModalOpen && (
        <DeleteModal
          reservationId={selectedReservationId}
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </CalendarWrapper>
  );
};

export default MyCalendar;
