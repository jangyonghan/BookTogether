import Navbar from "../components/navbar";
import TimeTable from "../components/timeTable";
import Bible from "../components/bible";
import styled from "styled-components";
import Calendar from "../components/calendar";
import ReservationStatus from "../components/ReservationStatus";

const DivWrapper = styled.div`
  max-width: 100%;
  margin: auto;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

const ReservationSection = styled.section``;

export default function Home() {
  return (
    <>
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
          <ReservationStatus />
        </section>
      </DivWrapper>

      <section>
        <TimeTable />
      </section>
    </>
  );
}
