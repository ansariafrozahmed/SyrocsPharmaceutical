"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "../ProductCard/ProductCard";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const RelatedProductSlider = ({ data }) => {
  return (
    <div>
      <Swiper
        className="!pb-10"
        spaceBetween={20}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={{
          // Add navigation
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        slidesPerView={6}
        breakpoints={{
          // when window width is >= 1200px (desktop)
          1200: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 4,
          },
          800: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 2,
          },
          400: {
            slidesPerView: 2,
          },
          300: {
            slidesPerView: 2,
          },
        }}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductCard data={item} />
          </SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
};

export default RelatedProductSlider;
