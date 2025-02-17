import styled from "styled-components";
import BibleBackground from "@/src/asset/images/bibleBackground3.png";
import { useBible } from "../hook/useBible";

const BibleWrapper = styled.div`
  width: 100%;
  height: 191px;
  max-width: 1000px;
  min-width: 316px;
  padding: 20px 10px;
  border-radius: 10px;
  background-image: url(${BibleBackground.src});
  background-size: cover;
  background-position: center; /* 이미지를 중앙에 배치 */
  background-repeat: no-repeat; /* 이미지 반복 안 함 */
`;

export default function Bible() {
  const { data, isError } = useBible();

  if (isError) {
    return (
      <>
        <span>네트워크 에러</span>
      </>
    );
  }

  return (
    <>
      <div>
        <h2>오늘의 성구</h2>
        <BibleWrapper>
          <h3>{data?.text}</h3>
          <p>{data?.verse}</p>
        </BibleWrapper>
      </div>
    </>
  );
}
