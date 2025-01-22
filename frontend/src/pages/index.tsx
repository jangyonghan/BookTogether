import Navbar from "../components/navbar";
import TimeTable from "../components/timeTable";
import Bible from "../components/bible";
import styled from "styled-components";

const DivWrapper = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  justify-items: center;
`;

export default function Home() {
  return (
    <>
      <DivWrapper>
        <Navbar />
        <section>
          <Bible />
        </section>

        <section>
          <div>
            <div>왼쪽 아이콘</div>
            <span>2025년 1월</span>
            <div>오른쪽 아이콘</div>
          </div>

          <div>달력 들어가기</div>
        </section>

        <section>
          <h2>예약 현황</h2>
          <div>
            <div>회의실 1 사진</div>
            <span>회의실 1</span>
            <div>회의실 2 사진</div>
            <span>회의실 2</span>
            <div>회의실 3 사진</div>
            <span>회의실 3</span>
            <div>회의실 3 사진</div>
            <span>회의실 3</span>
            <div>회의실 4 사진</div>
            <span>회의실 4</span>
            <div>청년부실 사진</div>
            <span>청년부실</span>
            <div>대학부실 사진</div>
            <span>대학부실</span>
            <div>로비 사진</div>
            <span>로비</span>
          </div>
        </section>
      </DivWrapper>

      <section>
        <TimeTable />
      </section>
    </>
  );
}
