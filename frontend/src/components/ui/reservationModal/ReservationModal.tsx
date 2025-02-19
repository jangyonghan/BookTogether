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
} from "./ReservationModal.style";
import Calendar from "../../calendar";
import XButton from "@/src/asset/icons/X_button.svg";
import BasicSelect from "../selector";
import TimePickerValue from "../time";
import dayjs, { Dayjs } from "dayjs";
import { useReservationAdd } from "@/src/hook/useReservation";
import { useRooms } from "@/src/hook/useRooms";
import { useCalendarStore } from "@/src/store/useCalendarStore";
import { AxiosError } from "axios";
import { getEndDate, combineDateTime } from "@/src/utils/dateTimeUtils";

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
  onCompleteSuccess: () => void;
}

export default function ReservationModal({
  open,
  onClose,
  onCompleteSuccess,
}: BasicModalProps) {
  const [room, setRoom] = React.useState("");
  const [purpose, setPurpose] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const { mutate } = useReservationAdd();
  const { data } = useRooms();
  const [startTime, setStartTime] = React.useState<Dayjs | null>(null);
  const [endTime, setEndTime] = React.useState<Dayjs | null>(null);
  const { selectedDate } = useCalendarStore();
  const [endDate, setEndDate] = React.useState<Dayjs | null>(null);

  const roomList = Array.isArray(data) ? data : [];
  const rooms = roomList?.map((room) => ({
    value: room._id,
    label: room.name,
  }));

  const handelClose = () => {
    onClose();
  };

  const handleEndTimeChange = (time: Dayjs | null) => {
    if (!startTime || !time) {
      setEndTime(time);
      return;
    }

    const updatedEndDate = getEndDate(selectedDate, startTime, time);
    setEndDate(updatedEndDate);
    setEndTime(time);
  };

  const handleSubmit = () => {
    if (!room || !purpose || !userName || !startTime || !endTime) {
      alert("모든필드를 입력하세요");
      return;
    }

    const combinedStartTime = combineDateTime(dayjs(selectedDate), startTime);
    const combinedEndTime = combineDateTime(endDate, endTime);

    if (!combinedStartTime || !combinedEndTime) {
      alert("날짜 및 시간 설정 오류");
      return;
    }

    const newEvent = {
      roomId: room,
      title: purpose,
      startTime: combinedStartTime,
      endTime: combinedEndTime,
      booker: userName,
    };

    mutate(newEvent, {
      onSuccess: () => {
        onCompleteSuccess();
        handelClose();
      },
      onError: (error) => {
        const axiosError = error as AxiosError;

        if (axiosError.response) {
          alert(
            axiosError.response.data && "중복된 시간에 예약할 수 없습니다."
          );
        } else {
          alert("네트워크 오류 또는 서버 응답 없음");
        }
        return;
      },
    });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handelClose}
        aria-hidden={false}
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
                options={rooms}
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
                  { value: "피드백", label: "피드백" },
                  { value: "회의", label: "회의" },
                  { value: "모임", label: "모임" },
                  { value: "기타", label: "기타" },
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
              <TimePickerValue
                startTime={startTime}
                setStartTime={setStartTime}
                endTime={endTime}
                setEndTime={handleEndTimeChange}
              />
            </ModalSection>

            <FooterDiv>
              <CancelButton type="button" onClick={handelClose}>
                취소
              </CancelButton>
              <ReservationButton type="button" onClick={handleSubmit}>
                예약하기
              </ReservationButton>
            </FooterDiv>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
