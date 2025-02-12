import styled from "styled-components";

export const CalendarWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-family: Arial, sans-serif;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 48px repeat(3, 1fr); /* 날짜 열 */
  background-color: #f9f9f9;
  border-bottom: 1px solid #ddd;
  text-align: center;
`;

export const Day = styled.div`
  padding: 8px;
  font-weight: bold;
`;

export const Body = styled.div`
  display: grid;
  grid-template-rows: repeat(24, 40px); /* 시간 슬롯 높이 */
  grid-template-columns: 48px repeat(3, 1fr); /* 시간 + 3일 */
  position: relative;
`;

export const TimeSlot = styled.div`
  grid-column: 1; /* 시간 슬롯 고정 */
  text-align: center;
  padding: 4px;
  background-color: #f0f0f0;
  border-right: 1px solid #ddd;
`;

export const Event = styled.div<{ $gridRow: string; $gridColumn: number }>`
  grid-row: ${(props) => props.$gridRow};
  grid-column: ${(props) => props.$gridColumn};
  background-color: rgba(255, 0, 0, 0.2); /* 기본 색상 */
  color: #000;
  border: 1px solid hsla(0, 0%, 100%, 0.4);
  border-radius: 4px;
  padding: 4px;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
`;
