//src/components/template/Header/index.js
"use client";
import Link from "next/link";
import styled from "styled-components";
import ThemeToggle from "../../atoms/ThemeToggle";
import Logo from "../../atoms/Logo";
import NavMenu from "./NavMenu";
import Container from "@/components/common/Container";

const NavBar = styled.header`
  position: relative;
  z-index: 1000;
  margin-top: 20px;
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
    <Container>
      <NavBar>
        <NavbarBg />
        <NavFlex>
          <NavMenu navData={navData} />
          <Link href="/" passHref>
            <Logo />
          </Link>
          <ThemeToggle />
        </NavFlex>
      </NavBar>
    </Container>
  );
};

export default Header;
