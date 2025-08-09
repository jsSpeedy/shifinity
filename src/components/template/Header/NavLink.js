//src/components/template/Header/NavLink.js
"use client";
import Link from "next/link";
import styled from "styled-components";

const A = styled(Link)`
  box-sizing: border-box;
  position: relative;
  display: block;
  text-decoration: none;
  width: 100%;
  font-weight: 500;
  font-size: 1rem;
  color: ${({ theme, $active }) => ($active ? theme.primary : "#fff")};
  padding: 0.75rem;
  transition: all 0.3s ease-in;
  border-radius: 1rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const NavLink = ({ href, big, $active, children }) => {
  return (
    <A href={href} passHref $active={$active} big={big}>
      {children}
    </A>
  );
};

export default NavLink;
