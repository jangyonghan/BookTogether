import Logo from "@/src/asset/icons/Logo.svg";
import styled from "styled-components";

const NavbarHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export default function Navbar() {
  return (
    <NavbarHeader>
      <Logo />
    </NavbarHeader>
  );
}
