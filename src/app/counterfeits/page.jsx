import Banner from "@/components/Banners/Banner";
import CounterfeitSection from "@/components/Counterfeits/CounterfeitSection";
import React from "react";

const Counterfeits = () => {
  return (
    <div>
      <Banner
        title={"Counterfeits"}
        bgImg={"/images/counterfiet.jpg"}
        page={"Counterfeits"}
      />
      <CounterfeitSection />
    </div>
  );
};

export default Counterfeits;
