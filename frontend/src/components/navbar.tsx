import Logo from "@/src/asset/icons/Logo.svg";
import Image from "next/image";
import styled from "styled-components";
import TemporaryDrawer from "./ui/menu";

const NavbarHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: -10px;
`;

export default function Navbar() {
  return (
    <NavbarHeader>
      <div>
        <TemporaryDrawer />
      </div>
      <div>
        <Logo />
      </div>
    </NavbarHeader>
  );
}
