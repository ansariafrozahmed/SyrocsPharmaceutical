"use client";
import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";

const HeroSlider = () => {
  const slideData = [
    {
      id: 1,
      image: "./banner-images/home2.webp",
      text: "At Syrocs, we stand at the forefront of pharmaceutical innovation, dedicated to advancing healthcare through cutting-edge solutions and life-changing medicines. ",
      // font: "font-title",
    },
    {
      id: 2,
      image: "./banner-images/home1.webp",
      text: "As a Germany-based pharmaceutical company, our commitment to excellence is unwavering, driven by a passion for improving the quality of life for individuals around the globe.",
      // font: "font-test",
    },
    {
      id: 3,
      image: "./banner-images/home3.webp",
      text: "At Syrocs, we stand at the forefront of pharmaceutical innovation, dedicated to advancing healthcare through cutting-edge solutions and life-changing medicines. ",
      // font: "font-test2",
    },
  ];

  return (
    <>
      <Carousel
        className="h-[88svh]"
        nextArrow={false}
        prevArrow={false}
        loop={true}
        autoplay={true}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {slideData?.map((item) => (
          <div className="relative h-full w-full" key={item.id}>
            <img
              src={item.image}
              alt="image 2"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 grid h-full w-full items-end bg-gradient-to-t from-black">
              <div className="w-[85%] pl-5 md:w-[50%] md:pl-20 lg:pl-20 ">
                <p
                  className={`mb-20 text-[1rem] lg:text-[1.5rem] tracking-wide text-white font-title`}
                >
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default HeroSlider;
