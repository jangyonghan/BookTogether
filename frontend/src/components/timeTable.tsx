import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import styled from "styled-components";
import { useCalendarStore } from "../store/useCalendarStore";
import { useRoomStore } from "../store/useRoomStore";
import { useReservation } from "../hook/useReservation";
import { useState } from "react";
import DeleteModal from "./ui/deleteModal";
import { EventClickArg, EventContentArg } from "@fullcalendar/core";
import Snackbar from "./ui/snackBar";
import dayjs from "dayjs";

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

const TimeTableH2 = styled.h2`
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 768px) {
    display: none;
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
  const [isSnackbar, setIsSnackbar] = useState(false);

  const toggleSnackbar = () => {
    setIsSnackbar((prev) => !prev);
  };

  const reservationData = Array.isArray(data) ? data : [data];

  //회의실별 데이터
  const filteredEvents = reservationData.filter(
    (event) => event?.roomId === selectedRoom
  );

  const formattedEvents = filteredEvents.map((event) => {
    const start = dayjs(event.startTime);
    const end = dayjs(event.endTime);
    const durationInMinutes = end.diff(start, "minute");

    return {
      id: event._id,
      title: `${event.booker} - ${event.title}`,
      start: event.startTime,
      end: event.endTime,
      extendedProps: { showTime: durationInMinutes > 30 },
    };
  });

  const renderEventContent = (eventInfo: EventContentArg) => {
    const showTime = eventInfo.event.extendedProps.showTime;
    return (
      <div>
        {!showTime ? (
          <span>{eventInfo.event.title}</span>
        ) : (
          <span>
            {dayjs(eventInfo.event.start).format("HH:mm")} -{" "}
            {dayjs(eventInfo.event.end).format("HH:mm")} <br />
            {eventInfo.event.title}
          </span>
        )}
      </div>
    );
  };

  const handelClickEvent = (clickInfo: EventClickArg) => {
    setSelectedReservationId(clickInfo.event.id);
    setIsModalOpen(true);
  };

  return (
    <CalendarWrapper>
      <TimeTableH2>타임테이블</TimeTableH2>
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
        slotMinTime="08:00:00"
        slotMaxTime="28:00:00"
        height="auto"
        contentHeight="auto"
        eventClick={handelClickEvent}
        eventContent={renderEventContent}
      />
      {isModalOpen && (
        <DeleteModal
          reservationId={selectedReservationId}
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onDeleteSuccess={() => toggleSnackbar()}
        />
      )}
      {isSnackbar && (
        <Snackbar
          message="삭제 완료"
          isOpen={isSnackbar}
          onClose={toggleSnackbar}
        />
      )}
    </CalendarWrapper>
  );
};

export default MyCalendar;

// 이제 dayjs를 통해서 차이가 몇분 나는지 가져온 다음에 displayEventTime에 적용하면 됨
//
