import Banner from "@/components/Banners/Banner";
import CertificateSection from "@/components/Certification/CertificateSection";
import React from "react";

const Certificates = () => {
  return (
    <div>
      <Banner
        title={"Certificates"}
        bgImg={"/images/certified.webp"}
        page={"Certificates"}
      />
      <CertificateSection />
    </div>
  );
};

export default Certificates;
