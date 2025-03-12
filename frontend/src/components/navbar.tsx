import Logo from "@/src/asset/icons/Logo.svg";
import styled from "styled-components";

const NavbarHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    margin-bottom: 10px;
  }
`;

export default function Navbar() {
  return (
    <NavbarHeader>
      <Logo />
    </NavbarHeader>
  );
}
