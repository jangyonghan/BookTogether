import styled from "styled-components";
import Business from "@/src/asset/icons/business.svg";
import Diamond from "@/src/asset/icons/diamond.svg";
import Flower from "@/src/asset/icons/flower.svg";
import Game from "@/src/asset/icons/game.svg";
import Global from "@/src/asset/icons/global.svg";
import School from "@/src/asset/icons/school.svg";
import Home from "@/src/asset/icons/home.svg";
import React, { useState } from "react";

interface RoomDivProps {
  $bgColor: string;
  $isSelected: boolean;
}

const RoomWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  margin-bottom: 20px;
  justify-items: center;
`;

const RoomDiv = styled.div<RoomDivProps>`
  background-color: ${(props) => props.$bgColor || "#fff"};
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
  width: 100px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  border: ${(props) =>
    props.$isSelected
      ? "3px solid #e0518b"
      : "none"}; /* 선택된 경우 테두리 추가 */
`;

const RoomName = styled.span`
  color: white;
  &:focus {
    border: solid 3px red;
  }
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

export default function ReservationStatus() {
  const [selectRoom, setSelectRoom] = useState<string | null>(null);

  const handleRoomClick = (roomName: string) => {
    setSelectRoom(roomName);
  };
  return (
    <>
      <RoomWrapper>
        {rooms.map((room, index) => (
          <RoomDiv
            key={index}
            $bgColor={room.bgColor}
            $isSelected={selectRoom === room.name}
            onClick={() => handleRoomClick(room.name)}
          >
            <room.icon />
            <RoomName>{room.name}</RoomName>
          </RoomDiv>
        ))}
      </RoomWrapper>
    </>
  );
}
