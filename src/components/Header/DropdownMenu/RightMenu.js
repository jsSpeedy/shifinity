// src/components/Header/DropdownMenu/RightMenu.js
"use client";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Play } from "lucide-react";

const DropdownFlex = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Card = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  min-width: 300px;
  max-width: 300px;
  opacity: 0;
  transform: translateY(10px);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.75rem;
  border-radius: 1rem;
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
  transition: transform 0.3s ease;
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

const Title = styled.h3`
  color: ${({ theme }) => theme.white};
  text-align: center;
`;

const Tag = styled.span`
  color: ${({ theme }) => theme.white};
  font-size: 0.75rem;
  text-align: center;
`;

const RightMenu = ({ data, isOpen }) => {
  return (
    <DropdownFlex>
      <Swiper
        spaceBetween={20}
        slidesPerView="auto"
        style={{ width: "100%" }}
        grabCursor={true}
      >
        {data.right.map((item, i) => (
          <SwiperSlide key={i} style={{ width: "300px", flexShrink: 0 }}>
            <Link href={item.href}>
              <Card $isOpen={isOpen} $index={i}>
                <Fragman>
                  <Image
                    src={item.image}
                    alt={item.label}
                    width={270}
                    height={174}
                    style={{ objectFit: "cover", borderRadius: "1rem" }}
                  />
                  <StyledPlay size={64} />
                </Fragman>
                <Title>{item.label}</Title>
                <Tag>{item.tag}</Tag>
              </Card>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </DropdownFlex>
  );
};

export default RightMenu;
