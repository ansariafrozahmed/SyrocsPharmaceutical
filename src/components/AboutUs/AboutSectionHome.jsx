import Link from "next/link";
import React from "react";

const AboutSectionHome = () => {
  const styling = {
    backgroundImage: "url(../images/about-us.webp)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
  };
  return (
    <div style={styling} className="relative w-full h-[100svh] bg-black">
      <div className="absolute inset-0 bg-gradient-to-t from-black opacity-90"></div>
      <div className="lg:w-[50%] p-5 lg:p-10 flex flex-col space-y-3 text-white items-start justify-end h-full">
        <h2 className="text-3xl lg:text-5xl z-10 font-title">About Syrocs</h2>
        <p className="text-sm md:text-[1.1rem] z-10 font-title tracking-wide leading-normal">
          Welcome to Syrocs, a cutting-edge pharmaceutical brand dedicated to
          producing Human Grade Pharmaceuticals in the form of tablets,
          capsules, and liquids.
        </p>
        <Link href={"/about-us"} className="z-10">
          <span className="text-lg font-light  font-title">Know more.. </span>
        </Link>
      </div>
      <div className="w-[60%]"></div>
    </div>
  );
};

export default AboutSectionHome;
