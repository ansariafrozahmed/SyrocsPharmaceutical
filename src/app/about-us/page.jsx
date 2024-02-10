import AboutUsComp from "@/components/AboutUs/AboutUsComp";
import Banner from "@/components/Banners/Banner";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <Banner
        title={"About Us"}
        bgImg={"/images/about-why.webp"}
        page={"About Us"}
      />
      <AboutUsComp />
    </div>
  );
};

export default AboutUs;
