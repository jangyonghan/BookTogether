import Navbar from "../components/navbar";
import MyCalendar from "../components/timeTable";
import Bible from "../components/bible";
import styled from "styled-components";
import Calendar from "../components/calendar";
import ReservationStatus from "../components/ReservationStatus";
import ReservationButton from "../components/ui/reservationButton";

const DivWrapper = styled.div`
  max-width: 100%;
  margin: auto;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;
const RoomH2 = styled.h2`
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 24px;
`;

export default function Home() {
  return (
    <>
      <ReservationButton />
      <Navbar />
      <DivWrapper>
        <section>
          <Bible />
        </section>

        <section>
          <div>
            <Calendar />
          </div>
        </section>

        <section>
          <RoomH2>예약 현황</RoomH2>
          <ReservationStatus />
        </section>
      </DivWrapper>
      <section>
        <MyCalendar />
      </section>
    </>
  );
}
