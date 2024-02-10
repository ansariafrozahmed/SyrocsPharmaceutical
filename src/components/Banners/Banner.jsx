import { ChevronRight } from "lucide-react";
import React from "react";

const Banner = ({ title, bgImg, page }) => {
  return (
    <div
      className=" bg-bottom h-auto text-white py-20 md:py-32 object-cover relative"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="flex flex-col items-center justify-center relative z-10">
        <h2 className="text-4xl lg:text-5xl uppercase font-semibold">
          {title}
        </h2>
        <div>
          <ul className="flex items-center text-sm justify-center gap-1 pt-2">
            <li className="font-medium text-gray-100">Home</li>
            <ChevronRight size={19} className="" />
            <li>{page}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
