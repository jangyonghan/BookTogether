import Image from "next/image";
import styled from "styled-components";
import Business from "@/src/asset/icons/business.svg";
import Diamond from "@/src/asset/icons/diamond.svg";
import Flower from "@/src/asset/icons/flower.svg";
import Game from "@/src/asset/icons/game.svg";
import Global from "@/src/asset/icons/global.svg";
import School from "@/src/asset/icons/school.svg";
import Home from "@/src/asset/icons/home.svg";

interface RoomDivProps {
  $bgColor: string;
  $justifyStart?: boolean;
}

const RoomWrapper = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;

  gap: 8px; /* 각 방 사이의 간격 추가 */
  margin-bottom: 20px;
`;

const RoomDiv = styled.div<RoomDivProps>`
  background-color: ${(props) => props.$bgColor || "#fff"};
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: ${(props) => (props.$justifyStart ? "start" : "center")};
  padding-left: ${(props) => (props.$justifyStart ? "5px" : "0")};
  width: 99px;
  height: 40px;
  border-radius: 8px;
`;

const RoomH2 = styled.h2`
  margin-top: 10px;
`;

const rooms = [
  { name: "회의실1", icon: Home, bgColor: "#ffa0a0" },
  { name: "회의실2", icon: Flower, bgColor: "#fcb213" },
  { name: "회의실3", icon: Diamond, bgColor: "#3dd09d" },
  { name: "회의실4", icon: Global, bgColor: "#30d1b1" },
  { name: "청년부실", icon: Business, bgColor: "#a0c6ff" },
  { name: "대학부실", icon: School, bgColor: "#efa0ff" },
  { name: "로비", icon: Game, bgColor: "#b5a0ff", justifyStart: true },
];

export default function ReservationStatus() {
  return (
    <>
      <RoomH2>예약 현황</RoomH2>
      <RoomWrapper>
        {rooms.map((room, index) => (
          <RoomDiv
            key={index}
            $bgColor={room.bgColor}
            $justifyStart={room.justifyStart}
          >
            <Image
              src={room.icon}
              width={30}
              height={30}
              alt={`${room.name} 아이콘`}
            />
            <span>{room.name}</span>
          </RoomDiv>
        ))}
      </RoomWrapper>
    </>
  );
}
