import styled from "styled-components";
import Business from "@/src/asset/icons/business.svg";
import Diamond from "@/src/asset/icons/diamond.svg";
import Flower from "@/src/asset/icons/flower.svg";
import Game from "@/src/asset/icons/game.svg";
import Global from "@/src/asset/icons/global.svg";
import School from "@/src/asset/icons/school.svg";
import Home from "@/src/asset/icons/home.svg";
import BasicModal from "./ui/modal";
import React from "react";

interface RoomDivProps {
  $bgColor: string;
  $justifyStart?: boolean;
  $menuWidth?: boolean;
}

interface RoomWrapperProps {
  $singleColumn?: boolean; // 단일 열 여부를 나타내는 props
  $menuWidth?: boolean;
}

interface ReservationStatusProps {
  singleColumn?: boolean; // 단일 열 여부를 나타내는 props
  menuWidth?: boolean;
  onRoomClick?: () => void;
  handelOpenModal?: boolean;
}

const RoomWrapper = styled.div<RoomWrapperProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$singleColumn ? "1fr" : "1fr 1fr 1fr"};
  gap: 8px;
  margin-bottom: 20px;
  justify-items: center;
`;

const RoomDiv = styled.div<RoomDivProps>`
  background-color: ${(props) => props.$bgColor || "#fff"};
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: ${(props) => (props.$justifyStart ? "start" : "center")};
  width: ${(props) => (props.$menuWidth ? "150px" : "100px")};
  height: 40px;
  border-radius: 8px;
`;

const rooms = [
  { name: "회의실1", icon: Home, bgColor: "#ffa0a0" },
  { name: "회의실2", icon: Flower, bgColor: "#fcb213" },
  { name: "회의실3", icon: Diamond, bgColor: "#3dd09d" },
  { name: "회의실4", icon: Global, bgColor: "#30d1b1" },
  { name: "청년부실", icon: Business, bgColor: "#a0c6ff" },
  { name: "대학부실", icon: School, bgColor: "#efa0ff" },
  { name: "중앙로비", icon: Game, bgColor: "#b5a0ff" },
];

export default function ReservationStatus({
  singleColumn,
  menuWidth,
}: ReservationStatusProps) {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const handelOpenModal = () => {
    setModalOpen(true);
  };

  const handelCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <RoomWrapper $singleColumn={singleColumn} $menuWidth={menuWidth}>
        {rooms.map((room, index) => (
          <RoomDiv
            key={index}
            $bgColor={room.bgColor}
            $menuWidth={menuWidth}
            onClick={handelOpenModal}
          >
            <room.icon />
            <span>{room.name}</span>
          </RoomDiv>
        ))}
      </RoomWrapper>

      <BasicModal open={isModalOpen} onClose={handelCloseModal} />
    </>
  );
}
