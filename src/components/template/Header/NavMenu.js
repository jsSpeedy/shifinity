//src/components/template/Header/NavMenu.js
"use client";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import Dropdown from "./Dropdown";
import NavLink from "./NavLink";
import { useRef, useState } from "react";

const NavItems = styled.nav`
  display: flex;
  align-items: center;
`;

const NavItem = styled.div``;

const Menu = ({ navData }) => {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setHoveredIndex(index);
    }, 100); // açıkken gecikme (100ms)
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
    }, 200); // kapanış gecikmesi
  };

  return (
    <NavItems>
      {navData.map(({ href, title, hasDropdown, dropdown }, index) => (
        <NavItem
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink href={href} $active={pathname.startsWith(href)}>
            {title}
          </NavLink>
          {hasDropdown && (
            <Dropdown data={dropdown} isOpen={hoveredIndex === index} />
          )}
        </NavItem>
      ))}
    </NavItems>
  );
};

export default Menu;
