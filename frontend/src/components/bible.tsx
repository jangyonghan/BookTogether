import styled from "styled-components";
import BibleBackground from "@/src/asset/images/bibleBackground2.jpg";

const BibleWrapper = styled.div`
  width: 100%;
  height: 191px;
  background-image: url(${BibleBackground.src});
  background-size: cover;
  background-position: center; /* 이미지를 중앙에 배치 */
  background-repeat: no-repeat; /* 이미지 반복 안 함 */
`;

export default function Bible() {
  return (
    <>
      <div>
        <h2>오늘의 성구</h2>
        <BibleWrapper>
          <h3>계시록 1장 1절</h3>
          <p>
            예수그리스도의 계시라 이는 하나님이 그에게 주사 반드시 속히 될 일을
            그 종들에게 보이시려고 그 천사를 그 종 요한에게 보내어 지시하신
            것이라.
          </p>
        </BibleWrapper>
      </div>
    </>
  );
}
