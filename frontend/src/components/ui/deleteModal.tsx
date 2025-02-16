import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useReservationDelete } from "@/src/hook/useReservation";
import styled from "styled-components";

const style = {
  position: "fixed",
  bottom: "0%",
  left: "50%",
  transform: "translate(-50%)",
  width: "100%",
  height: "160px",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};

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
export const ReservationDeleteButton = styled(BaseButton)`
  background-color: #f54141;
  color: white;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const TitleText = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface DeleteModalProps {
  open: boolean; // event가 없을 수도 있으므로 `null` 허용
  onClose: () => void; // 모달 닫기 함수
  reservationId: string | null;
}

export default function DeleteModal({
  open,
  onClose,
  reservationId,
}: DeleteModalProps) {
  const mutation = useReservationDelete();

  const handelDelete = () => {
    mutation.mutate(reservationId);
    onClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <TitleText>예약을 취소하시겠습니까?</TitleText>
          </Typography>
          <ButtonWrapper>
            <CancelButton onClick={onClose}>취소</CancelButton>
            <ReservationDeleteButton onClick={handelDelete}>
              삭제하기
            </ReservationDeleteButton>
          </ButtonWrapper>
        </Box>
      </Modal>
    </div>
  );
}
