"use client";
import SectionLayout from "@/sections/layout";
import { Grid, Theme, useMediaQuery } from "@mui/material";
import { CERTIFICATES } from "@/data/certificate";
import CertificateCard from "@/sections/certificate/view/CertificateCard";
import { SwiperSlide } from "swiper/react";
import CarouselContainer from "@/components/carousel/CarouselContainer";

export default function Certificate() {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <SectionLayout
      id={"certificate"}
      title={"자격증 및 수상"}
      stackSx={{ backgroundColor: "#FAFAFA" }}
    >
      {smDown ? (
        <Grid
          container
          maxWidth={"lg"}
          spacing={{ xs: 0, sm: 3 }}
          direction={{ xs: "column", sm: "row" }}
        >
          {CERTIFICATES.map((certificate) => (
            <Grid
              key={`certificate-${certificate.name}`}
              item
              xs={12}
              md={6}
              lg={4}
            >
              <CertificateCard certification={certificate} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <CarouselContainer id={"certificate"}>
          {CERTIFICATES.map((certificate) => (
            <SwiperSlide key={`certificate-${certificate.name}`}>
              <CertificateCard certification={certificate} />
            </SwiperSlide>
          ))}
        </CarouselContainer>
      )}
    </SectionLayout>
  );
}
