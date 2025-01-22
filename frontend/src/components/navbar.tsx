import Logo from "@/src/asset/icons/Logo.svg";
import Menu from "@/src/asset/icons/Menu.svg";
import Image from "next/image";
import styled from "styled-components";

const NavbarHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
`;

export default function Navbar() {
  return (
    <NavbarHeader>
      <div>
        <Image src={Menu} alt="메뉴아이콘" width={16} height={16} />
      </div>
      <div>
        <Image src={Logo} alt="로고 이미지" width={63} height={48} />
      </div>
    </NavbarHeader>
  );
}
