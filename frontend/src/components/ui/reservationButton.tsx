import React, { useState } from "react";
import styled from "styled-components";
import ReservationModal from "./reservationModal/ReservationModal";
import Snackbar from "./snackBar";

const Button = styled.button`
  display: inline-block;
  background-color: #e0418b;
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding: 15px 25px;
  border-radius: 30px;
  position: fixed;
  bottom: 30px;
  right: 15px;
  z-index: 10;
`;

export default function ReservationButton() {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [isSnackbar, setIsSnackbar] = useState(false);

  const toggleSnackbar = () => {
    setIsSnackbar((prev) => !prev);
  };

  const handelOpenModal = () => {
    setModalOpen(true);
  };

  const handelCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Button onClick={handelOpenModal}>예약하기</Button>
      <ReservationModal
        open={isModalOpen}
        onClose={handelCloseModal}
        onCompleteSuccess={() => toggleSnackbar()}
      />
      {isSnackbar && (
        <Snackbar
          message="예약 완료"
          isOpen={isSnackbar}
          onClose={toggleSnackbar}
        />
      )}
    </>
  );
}
