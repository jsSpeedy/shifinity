// src/components/template/Header/Dropdown/DropdownMenu.js
"use client";
import styled from "styled-components";
import NavLink from "../NavLink";

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
  cursor: pointer;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const DropdownMenu = ({ data, isOpen, setActiveKey }) => {
  return (
    <DropdownList>
      {data.map(({ title, href, apiKey }, i) => (
        <NavLink key={i} href={href}>
          <DropdownListItem
            $isOpen={isOpen}
            $index={i}
            onMouseEnter={() => setActiveKey(apiKey)}
          >
            {title}
          </DropdownListItem>
        </NavLink>
      ))}
    </DropdownList>
  );
};

export default DropdownMenu;
