//src/components/Header/Logo.js
"use client";
import styled from "styled-components";
import { Montserrat_Alternates } from "next/font/google";

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-montserrat-alt",
  display: "swap",
});

const LogoWrapper = styled.span`
  font-family: var(--font-montserrat-alt), sans-serif;
  font-weight: 900;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.white};
`;

export default function Logo() {
  return (
    <LogoWrapper className={montserratAlternates.variable}>
      SCENEFIX
    </LogoWrapper>
  );
}
