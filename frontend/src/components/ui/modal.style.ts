import styled from "styled-components";

export const TitleHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
`;

export const ModalH3 = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const ModalSection = styled.section`
  margin-bottom: 25px;
`;

export const InputBox = styled.input`
  border: solid 1px #adadad;
  padding: 10px 20px;
  width: 100px;
  font-size: 18px;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;

export const FooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: black;
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  height: 40px;
  border: solid 1px #d9d9d9;
`;

export const CancelButton = styled(BaseButton)`
  background-color: white;
`;
export const ReservationButton = styled(BaseButton)`
  background-color: #fff0e8;
`;
