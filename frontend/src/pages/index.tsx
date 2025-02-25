import Navbar from "../components/navbar";
import MyCalendar from "../components/timeTable";
import ReservationButton from "../components/ui/reservationButton";
import VerseAndBooking from "../components/ui/BookingStatus/VerseAndBooking";
import styled from "styled-components";

const ResponsiveUI = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin: 0 10px;
  }
`;

export default function Home() {
  return (
    <>
      <ReservationButton />
      <Navbar />
      <ResponsiveUI>
        <VerseAndBooking />
        <section>
          <MyCalendar />
        </section>
      </ResponsiveUI>
    </>
  );
}
