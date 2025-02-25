import styled from "styled-components";
import Bible from "../../bible";
import Calendar from "../../calendar";
import ReservationStatus from "../../ReservationStatus";

const DivWrapper = styled.div`
  max-width: 100%;
  margin: auto;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

const ResponsiveUISideBar = styled.div`
  @media (min-width: 768px) {
    align-self: flex-start; /* ✅ 추가 */
    position: sticky;
    top: 40px;
  }
`;

export default function VerseAndBooking() {
  return (
    <ResponsiveUISideBar>
      <DivWrapper>
        <section>
          <Bible />
        </section>

        <section>
          <Calendar />
        </section>

        <section>
          <ReservationStatus />
        </section>
      </DivWrapper>
    </ResponsiveUISideBar>
  );
}
