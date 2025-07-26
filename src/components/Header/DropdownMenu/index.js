// src/components/Header/DropdownMenu.js
"use client";
import styled from "styled-components";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";

const Dropdown = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 1.5rem;
  position: absolute;
  inset: 0%;
  width: 100%;
  height: max-content;
  padding: 1.5rem;
  top: 65px;
  display: block;
  box-sizing: border-box;
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0px) scale(1)" : "translateY(-5px) scale(0.98)"};
  transition: opacity 0.35s ease, transform 0.35s ease;
`;

const DropdownDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  align-items: start;
  gap: 30px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const DropdownMenu = ({ data, isOpen }) => {
  if (!data) return null;

  return (
    <Dropdown $isOpen={isOpen}>
      <DropdownDiv>
        <LeftMenu data={data} isOpen={isOpen} />
        <RightMenu data={data} isOpen={isOpen} />
      </DropdownDiv>
    </Dropdown>
  );
};

export default DropdownMenu;
