// src/components/common/Container/index.js
import styled, { css } from "styled-components";
import { breakpoints, media } from "@/styles/responsive";

const Container = styled.div`
  width: 100%;
  margin-inline: auto;
  box-sizing: border-box;

  ${({ noPadding }) =>
    !noPadding &&
    css`
      padding-inline: 1rem;

      @media (min-width: ${breakpoints.md}) {
        padding-inline: 1.5rem;
      }

      @media (min-width: ${breakpoints.lg}) {
        padding-inline: 2rem;
      }
    `}

  ${({ noWidth }) =>
    !noWidth &&
    css`
      @media (min-width: ${breakpoints.sm}) {
        max-width: 540px;
      }

      @media (min-width: ${breakpoints.md}) {
        max-width: 720px;
      }

      @media (min-width: ${breakpoints.lg}) {
        max-width: 960px;
      }

      @media (min-width: ${breakpoints.xl}) {
        max-width: 1140px;
      }

      @media (min-width: ${breakpoints.xxl}) {
        max-width: 1320px;
      }

      @media (min-width: ${breakpoints.xxxl}) {
        max-width: 1440px;
      }

      ${media.minQuadHD} {
        max-width: 2000px;
      }
    `}
`;

export default Container;
