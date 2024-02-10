"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ADMINURL } from "@/app/page";

const ProductImage = ({ main_image, gallery_image }) => {
  // console.log(gallery_image[0].replace(/\\/g, "/"));
  // const data = [
  //   {
  //     img: "/p2.png",
  //   },
  //   {
  //     img: "/p3.png",
  //   },
  //   {
  //     img: "/p4.png",
  //   },
  //   {
  //     img: "/p5.png",
  //   },
  //   {
  //     img: "/p6.png",
  //   },
  //   {
  //     img: "/p7.png",
  //   },
  // ];

  return (
    <>
      <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
        <Carousel
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          thumbWidth={60}
          className="productCarousel"
        >
          <img
            src={
              main_image
                ? `${ADMINURL}${main_image?.replace(/\\/g, "/")}`
                : "./Placeholder.webp"
            }
          />
          {gallery_image?.map((item, index) => (
            <img
              key={index}
              src={
                item
                  ? `${ADMINURL}${item.replace(/\\/g, "/")}`
                  : "/placeholder.webp"
              }
              alt=""
            />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default ProductImage;
