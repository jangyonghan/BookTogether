import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  ModalTitle,
  ModalH3,
  ModalSection,
  InputBox,
  TitleHeader,
  CancelButton,
  ReservationButton,
  FooterDiv,
} from "./modal.style";
import Calendar from "../calendar";
import XButton from "@/src/asset/icons/X_button.svg";
import BasicSelect from "./selector";
import TimePickerValue from "./time";
import { Dayjs } from "dayjs";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
  maxHeight: "80vh",
  overflowY: "auto",
  outline: "none",
};

interface BasicModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BasicModal({ open, onClose }: BasicModalProps) {
  const [room, setRoom] = React.useState("");
  const [purpose, setPurpose] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [time, setTime] = React.useState<Dayjs | null>(null);

  const handelClose = () => {
    onClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handelClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <TitleHeader>
              <ModalTitle>회의실 예약하기</ModalTitle>
              <div onClick={handelClose}>
                <XButton />
              </div>
            </TitleHeader>
          </Typography>
          <Typography
            id="modal-modal-description"
            component="div"
            sx={{ mt: 2 }}
          >
            <ModalSection>
              <ModalH3>장소</ModalH3>
              <BasicSelect
                label="회의실 선택"
                options={[
                  { value: "room1", label: "회의실1" },
                  { value: "room2", label: "회의실2" },
                  { value: "room3", label: "회의실3" },
                  { value: "room4", label: "회의실4" },
                  { value: "youth", label: "청년부실" },
                  { value: "university", label: "대학부실" },
                  { value: "lobby", label: "중앙로비" },
                ]}
                selectedValue={room}
                onChange={setRoom}
              />
            </ModalSection>

            <ModalSection>
              <ModalH3>예약자</ModalH3>
              <InputBox
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </ModalSection>

            <ModalSection>
              <ModalH3>사용목적</ModalH3>
              <BasicSelect
                label="사용 목적 선택"
                options={[
                  { value: "feedback", label: "피드백" },
                  { value: "meeting", label: "회의" },
                  { value: "class", label: "모임" },
                  { value: "other", label: "기타" },
                ]}
                selectedValue={purpose}
                onChange={setPurpose}
              />
            </ModalSection>

            <ModalSection>
              <ModalH3>사용 날짜</ModalH3>
              <div>
                <Calendar />
              </div>
            </ModalSection>

            <ModalSection>
              <ModalH3>시간</ModalH3>
              <TimePickerValue value={time} onChange={setTime} />
            </ModalSection>

            <FooterDiv>
              <CancelButton type="button">취소</CancelButton>
              <ReservationButton type="button">예약하기</ReservationButton>
            </FooterDiv>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
