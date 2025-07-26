// src/components/Header/DropdownMenu/LeftMenu.js
"use client";
import styled from "styled-components";
import LinkA from "../Link";

const DropdownList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;

const DropdownListItem = styled.div`
  font-size: 1rem;
  opacity: 0;
  transform: translateY(10px);
  animation: ${({ $isOpen, $index }) =>
    $isOpen ? `fadeInUp 0.4s ease forwards ${$index * 0.07}s` : "none"};

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const LeftMenu = ({ data, isOpen }) => {
  return (
    <DropdownList>
      {data.left.map((item, i) => (
        <LinkA key={i} href={item.href}>
          <DropdownListItem $isOpen={isOpen} $index={i}>
            {item.label}
          </DropdownListItem>
        </LinkA>
      ))}
    </DropdownList>
  );
};

export default LeftMenu;
