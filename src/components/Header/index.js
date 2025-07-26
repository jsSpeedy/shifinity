//src/components/Header/index.js
"use client";
import Link from "next/link";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import Menu from "./Menu";

const NavBar = styled.header`
  position: relative;
  z-index: 1000;
  top: 20px;
`;

const NavbarBg = styled.div`
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 1.5rem;
  position: absolute;
  inset: 0%;
`;

const NavFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  padding: 10px 30px;
`;

const Header = ({ navData }) => {
  return (
    <NavBar>
      <NavbarBg />
      <NavFlex>
        <Menu navData={navData} />
        <Link href="/" passHref>
          <Logo />
        </Link>
        <ThemeToggle />
      </NavFlex>
    </NavBar>
  );
};

export default Header;
