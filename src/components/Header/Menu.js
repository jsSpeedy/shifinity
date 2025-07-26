//src/components/Header/Menu.js
"use client";
import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import DropdownMenu from "./DropdownMenu";
import LinkA from "./Link";
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
      {navData.map((nav, index) => (
        <NavItem
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <LinkA href={nav.href} $active={pathname.startsWith(nav.href)}>
            {nav.label}
          </LinkA>
          {nav.hasDropdown && (
            <DropdownMenu data={nav.dropdown} isOpen={hoveredIndex === index} />
          )}
        </NavItem>
      ))}
    </NavItems>
  );
};

export default Menu;
