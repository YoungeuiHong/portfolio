"use client";
import { Container, IconButton } from "@mui/material";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { ReactNode } from "react";
import "./Carousel.css";

interface Props {
  id: string;
  children: ReactNode;
}

export default function CarouselContainer({ id, children }: Props) {
  return (
    <>
      <Container sx={{ maxWidth: "80%" }}>
        <Swiper
          cssMode={true}
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={24}
          navigation={{
            prevEl: `#${id}-prev-slide-button`,
            nextEl: `#${id}-next-slide-button`,
            disabledClass: "swiper-button-disabled",
          }}
          pagination={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            920: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {children}
        </Swiper>
      </Container>
      <IconButton
        id={`${id}-prev-slide-button`}
        sx={{ position: "absolute", top: "46%", left: "4vw", zIndex: 1000 }}
      >
        <NavigateBeforeIcon fontSize="large" />
      </IconButton>
      <IconButton
        id={`${id}-next-slide-button`}
        sx={{ position: "absolute", top: "46%", right: "4vw", zIndex: 1000 }}
      >
        <NavigateNextIcon fontSize="large" />
      </IconButton>
    </>
  );
}
