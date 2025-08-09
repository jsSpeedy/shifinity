// src/components/template/Header/Dropdown/DropdownSwiper.js
"use client";
import styled from "styled-components";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Play } from "lucide-react";
import { getImageUrl } from "@/lib/api/ImagesApi";

const DropdownFlex = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Card = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 8px;
  max-width: 300px;
  width: 100%;
  opacity: 0;
  transform: translateY(10px);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.75rem;
  border-radius: 1rem;
  cursor: pointer;
  animation: ${({ $isOpen, $index }) =>
    $isOpen ? `fadeInUp 1s ease forwards ${$index * 0.1 + 0.3}s` : "none"};

  &:hover {
    svg {
      transform: translate(-50%, -50%) scale(1.2);
    }
  }
`;

const Fragman = styled.div`
  position: relative;
  overflow: hidden;
  max-height: 170px;
`;

const StyledPlay = styled(Play)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  transform-origin: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  padding: 0.6rem;
  border-radius: 999px;
  transition: transform 0.3s ease;
`;

const Title = styled.h4`
  color: ${({ theme }) => theme.white};
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

const DropdownSwiper = ({ isOpen, movies }) => {
  return (
    <DropdownFlex>
      <Swiper
        spaceBetween={20}
        slidesPerView="auto"
        style={{ width: "100%" }}
        grabCursor={true}
      >
        {movies.map((movie, i) => (
          <SwiperSlide key={i} style={{ width: "300px", flexShrink: 0 }}>
            <Card $isOpen={isOpen} $index={i}>
              <Fragman>
                <Image
                  src={getImageUrl(
                    movie.backdrop_path || movie.poster_path,
                    "w500"
                  )}
                  alt={movie.title || movie.name}
                  width={270}
                  height={170}
                  style={{ objectFit: "cover", borderRadius: "1rem" }}
                />
                <StyledPlay size={64} />
              </Fragman>
              <Title>{movie.title || movie.name}</Title>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </DropdownFlex>
  );
};

export default DropdownSwiper;
