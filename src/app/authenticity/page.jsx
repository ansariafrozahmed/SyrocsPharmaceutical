import AuthenticitySection from "@/components/Authenticity/AuthenticitySection";
import Banner from "@/components/Banners/Banner";
import React from "react";

const Authenticity = () => {
  return (
    <div>
      <Banner
        title={"Authenticity"}
        bgImg={"/images/authentic.webp"}
        page={"Authenticity"}
      />
      <AuthenticitySection />
    </div>
  );
};

export default Authenticity;
