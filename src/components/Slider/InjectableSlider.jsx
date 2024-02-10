"use client";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow"; // Import the coverflow effect style
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import { ADMINURL } from "@/app/page";

export default function InjectableSlider() {
  const [injectableProducts, setInjectableProducts] = useState();

  useEffect(() => {
    const fetchInjectableProducts = async () => {
      const response = await fetch(
        `${ADMINURL}api/getProductsByCategory/injectable`
      );
      const result = await response.json();
      // console.log(result, "IN SLIDER");
      setInjectableProducts(result);
    };
    fetchInjectableProducts();
  }, []);

  return (
    <div className="py-10 lg:py-20">
      <h2 className="text-center text-3xl pb-5 lg:text-5xl font-title">
        INJECTABLES
      </h2>
      {/* <p className="px-5 md:px-40 lg:px-60 xl:px-80 leading-tight -mt-5 text-gray-700 lg:text-lg text-center tracking-wide font-medium">
        Injectable medications stand as a critical component in modern
        healthcare, offering precise and rapid delivery of therapeutic agents.
      </p> */}
      <Swiper
        // slidesPerView={3}
        // spaceBetween={200}
        navigation={{
          // Add navigation
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        effect={"coverflow"}
        loop={false}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0, // Set the rotation of the slides
          stretch: 0, // Set the depth of the stack of slides
          depth: 100, // Set the depth of the current slide
          modifier: 3, // Set the modifier of the effect (slides moving along the z-axis)
          scale: 0.9,
          slideShadows: false, // Enable slide shadows
        }}
        breakpoints={{
          // when window width is >= 1200px (desktop)
          1200: {
            slidesPerView: 2,
            spaceBetween: 200,
          },
          1000: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 80,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          300: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        // pagination={{
        //     clickable: true,
        // }}
        modules={[Pagination, EffectCoverflow, Navigation]}
        // className="swiper_container"
      >
        {injectableProducts?.map((item, index) => (
          <SwiperSlide key={index} className="pt-5 pb-14">
            <Link href={`/product/${item?.product_title}?pid=${item?.id}`}>
              <div className="flex flex-col items-center justify-center">
                <img
                  className="h-[200px] lg:h-[500px] w-full object-contain"
                  src={
                    item?.main_image
                      ? `${ADMINURL}${item.main_image?.replace(/\\/g, "/")}`
                      : "./Placeholder.webp"
                  }
                  alt={item?.product_title}
                />
                <h2 className="text-[0.9rem] lg:text-[1.1rem] w-[80%] lg:w-[70%] text-center line-clamp-1">
                  {item?.product_title}
                </h2>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
}
