import styled from "styled-components";

const CalendarWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 48px repeat(3, 1fr); /* 날짜 열 */
  background-color: #f9f9f9;
  border-bottom: 1px solid #ddd;
  text-align: center;
`;

const Day = styled.div`
  padding: 8px;
  font-weight: bold;
`;

const Body = styled.div`
  display: grid;
  grid-template-rows: repeat(24, 40px); /* 시간 슬롯 높이 */
  grid-template-columns: 48px repeat(3, 1fr); /* 시간 + 3일 */
  position: relative;
`;

const TimeSlot = styled.div`
  grid-column: 1; /* 시간 슬롯 고정 */
  text-align: center;
  padding: 4px;
  background-color: #f0f0f0;
  border-right: 1px solid #ddd;
  border: 1px red;
`;

const Event = styled.div`
  background-color: rgba(255, 0, 0, 0.2); /* 기본 색상 */
  color: #000;
  border: 1px solid hsla(0, 0%, 100%, 0.4);
  border-radius: 4px;
  padding: 4px;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
`;

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
        <TimeSlot>9:00</TimeSlot>
        <TimeSlot>10:00</TimeSlot>
        <TimeSlot>11:00</TimeSlot>
        <TimeSlot>12:00</TimeSlot>
        <TimeSlot>13:00</TimeSlot>
        <TimeSlot>14:00</TimeSlot>
        <TimeSlot>15:00</TimeSlot>
        <TimeSlot>16:00</TimeSlot>
        <TimeSlot>17:00</TimeSlot>
        <TimeSlot>18:00</TimeSlot>
        <TimeSlot>19:00</TimeSlot>
        <TimeSlot>20:00</TimeSlot>
        <TimeSlot>21:00</TimeSlot>
        <TimeSlot>22:00</TimeSlot>
        <TimeSlot>23:00</TimeSlot>
        <TimeSlot>24:00</TimeSlot>

        <Event style={{ gridRow: "9 / 12", gridColumn: "2" }}>
          <span>장용한: 피드백</span>
        </Event>
        <Event style={{ gridRow: "14 / 15", gridColumn: "2" }}>
          <span>김유리: 회의</span>
        </Event>
      </Body>
    </CalendarWrapper>
  );
}
