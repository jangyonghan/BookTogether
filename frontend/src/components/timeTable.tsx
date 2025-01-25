import {
  CalendarWrapper,
  Header,
  Day,
  Body,
  TimeSlot,
  Event,
} from "@/src/components/style/timeTableStyle";

// 예약 현황 레이블 계산
const calculateGridRow = (startTime: string, endTime: string) => {
  const startHour = parseInt(startTime.split(":")[0], 10);
  const endHour = parseInt(endTime.split(":")[0], 10);
  return `${startHour + 1} / ${endHour + 1}`;
};

// 목데이터
const events = [
  {
    id: 1,
    name: "장용한: 피드백",
    day: 2,
    startTime: "10:00",
    endTime: "12:00",
  },
  { id: 2, name: "김유리: 회의", day: 2, startTime: "14:00", endTime: "15:00" },
  { id: 3, name: "김두한: 회의", day: 1, startTime: "10:00", endTime: "15:00" },
];

export default function TimeTable() {
  return (
    <CalendarWrapper>
      <Header>
        <Day>시간</Day>
        <Day>Wed 8</Day>
        <Day>Thu 9</Day>
        <Day>Fri 10</Day>
      </Header>

      <Body>
        {[...Array(24)].map((_, index) => (
          <TimeSlot key={index}>{`${index + 1}:00`}</TimeSlot>
        ))}

        {events.map((event) => (
          <Event
            key={event.id}
            $gridRow={calculateGridRow(event.startTime, event.endTime)}
            $gridColumn={event.day + 1}
          >
            <span>{event.name}</span>
          </Event>
        ))}
      </Body>
    </CalendarWrapper>
  );
}
