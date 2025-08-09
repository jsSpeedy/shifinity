//src/components/atoms/ThemeToggle.js
"use client";
import styled from "styled-components";
import { useTheme } from "@/context/ThemeContext";

const StyledWrapper = styled.div`
  cursor: pointer;
  .switch {
    --a: 0.5s ease-out;
    cursor: pointer;
    position: relative;
    display: inline-flex;
    height: 0.75em;
    border-radius: 1em;
    box-shadow: 0 0 0 0.66em rgba(0, 0, 0, 0.5);
    aspect-ratio: 212.4992/84.4688;
    background-color: rgba(0, 0, 0, 0.5);
  }

  /* Hide default HTML checkbox */
  #check {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .switch svg {
    height: 100%;
  }

  .switch svg path {
    color: #fffa;
    stroke-width: 16;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 0 45 87 999;
    transition: all var(--a);
    transform-origin: center;
  }

  #check:checked ~ .switch svg path {
    stroke-dasharray: 0 178 87 999;
    stroke-dashoffset: 1;
  }
`;

const Switch = () => {
  const { toggleTheme } = useTheme();
  return (
    <StyledWrapper onClick={toggleTheme}>
      <input id="check" type="checkbox" onClick={toggleTheme} />
      <label className="switch" htmlFor="check" onClick={toggleTheme}>
        <svg
          viewBox="0 0 212.4992 84.4688"
          overflow="visible"
          onClick={toggleTheme}
        >
          <path
            pathLength={360}
            fill="none"
            stroke="currentColor"
            d="M 42.2496,84.4688 C 18.913594,84.474104 -0.00530424,65.555206 0,42.2192 0.01148477,18.895066 18.925464,-0.00530377 42.2496,0 65.573736,-0.00530377 84.487715,18.895066 84.4992,42.2192 84.504504,65.555206 65.585606,84.474104 42.2496,84.4688 18.913594,84.474104 -0.00530424,65.555206 0,42.2192 0.01148477,18.895066 18.925463,-0.00188652 42.2496,0 c 64,0 64,84.4688 128,84.4688 23.32414,0.0019 42.23812,-18.895066 42.2496,-42.2192 C 212.5042,18.913594 193.58561,-0.005304 170.2496,0 146.91359,-0.005304 127.9947,18.913594 128,42.2496 c 0.0115,23.324134 18.92546,42.224504 42.2496,42.2192 23.32414,0.0053 42.23812,-18.895066 42.2496,-42.2192 C 212.5042,18.913594 193.58561,-0.005304 170.2496,0 c -64,0 -64,84.4688 -128,84.4688 z"
          />
          <path
            pathLength={360}
            style={{ scale: "1 -1" }}
            fill="none"
            stroke="currentColor"
            d="M 42.2496,84.4688 C 18.913594,84.474104 -0.00530424,65.555206 0,42.2192 0.01148477,18.895066 18.925464,-0.00530377 42.2496,0 65.573736,-0.00530377 84.487715,18.895066 84.4992,42.2192 84.504504,65.555206 65.585606,84.474104 42.2496,84.4688 18.913594,84.474104 -0.00530424,65.555206 0,42.2192 0.01148477,18.895066 18.925463,-0.00188652 42.2496,0 c 64,0 64,84.4688 128,84.4688 23.32414,0.0019 42.23812,-18.895066 42.2496,-42.2192 C 212.5042,18.913594 193.58561,-0.005304 170.2496,0 146.91359,-0.005304 127.9947,18.913594 128,42.2496 c 0.0115,23.324134 18.92546,42.224504 42.2496,42.2192 23.32414,0.0053 42.23812,-18.895066 42.2496,-42.2192 C 212.5042,18.913594 193.58561,-0.005304 170.2496,0 c -64,0 -64,84.4688 -128,84.4688 z"
          />
        </svg>
      </label>
    </StyledWrapper>
  );
};

export default Switch;
