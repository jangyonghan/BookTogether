import styled from "styled-components";
import Business from "@/src/asset/icons/business.svg";
import Diamond from "@/src/asset/icons/diamond.svg";
import Flower from "@/src/asset/icons/flower.svg";
import Game from "@/src/asset/icons/game.svg";
import Global from "@/src/asset/icons/global.svg";
import School from "@/src/asset/icons/school.svg";
import Home from "@/src/asset/icons/home.svg";
import React, { useState } from "react";
import { useRooms } from "../hook/useRooms";

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
  opacity: ${(props) => (props.$isSelected ? 1 : 0.4)};
`;

const RoomName = styled.span`
  color: white;
`;

const roomIcons: Record<string, React.ElementType> = {
  회의실1: Home,
  회의실2: Flower,
  회의실3: Diamond,
  회의실4: Global,
  청년부실: Business,
  대학부실: School,
  중앙로비: Game,
};

export default function ReservationStatus() {
  const [selectRoom, setSelectRoom] = useState<string | null>(null);
  const { data, isLoading, isError } = useRooms();

  if (isLoading) {
    return <>로딩중</>;
  }

  if (isError) {
    return <>네트워크 에러</>;
  }

  const roomList = Array.isArray(data) ? data : [];

  const handleRoomClick = (roomName: string) => {
    setSelectRoom(roomName);
    console.log(roomName);
  };
  return (
    <>
      <RoomWrapper>
        {roomList?.map((room) => {
          const IconComponent = roomIcons[room.name] || Home;
          return (
            <RoomDiv
              key={room.id}
              $bgColor={room.bgColor}
              $isSelected={selectRoom === room.name}
              onClick={() => handleRoomClick(room.name)}
            >
              <IconComponent />
              <RoomName>{room.name}</RoomName>
            </RoomDiv>
          );
        })}
      </RoomWrapper>
    </>
  );
}
