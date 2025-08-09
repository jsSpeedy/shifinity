// src/components/template/Header/Dropdown/index.js
"use client";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";
import DropdownSwiper from "./DropdownSwiper";
import { useEffect, useState } from "react";
import {
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
} from "@/lib/api/MoviesApi";
import {
  fetchAiringTodayTVShows,
  fetchPopularTVShows,
  fetchTopRatedTVShows,
} from "@/lib/api/SeriesApi";

const DropdownWrapper = styled.div`
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
  grid-template-columns: 1fr 3fr;
  align-items: start;
  gap: 30px;
  width: 100%;
`;

const apiMap = {
  // Movies
  popular: fetchPopularMovies,
  now_playing: fetchNowPlayingMovies,
  top_rated: fetchTopRatedMovies,
  // Series
  popular_tv: fetchPopularTVShows,
  top_rated_tv: fetchTopRatedTVShows,
  airing_today: fetchAiringTodayTVShows,
};

const Dropdown = ({ data: { menu }, isOpen }) => {
  const [activeKey, setActiveKey] = useState(menu[0]?.apiKey || "");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (activeKey && apiMap[activeKey]) {
      apiMap[activeKey]().then(setMovies);
    }
  }, [activeKey]);

  return (
    <DropdownWrapper $isOpen={isOpen}>
      <DropdownDiv>
        <DropdownMenu data={menu} isOpen={isOpen} setActiveKey={setActiveKey} />
        <DropdownSwiper isOpen={isOpen} movies={movies} />
      </DropdownDiv>
    </DropdownWrapper>
  );
};

export default Dropdown;
