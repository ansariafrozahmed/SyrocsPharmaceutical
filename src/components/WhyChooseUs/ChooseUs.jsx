import React from "react";
import Card from "./Card";

const ChooseUs = () => {
  const data = [
    {
      id: 1,
      title: "Certificates",
      img: "../images/home-certified.webp",
      desc: "At Syrocs Pharmaceutical, our resolute commitment to quality is at the core of everything we do.",
      url: "/certification",
    },
    {
      id: 2,
      img: "../images/home-auth.webp",
      desc: "At Syrocs Pharmaceutical, unwavering dedication to authenticity is the cornerstone of our operations.",
      title: "Authenticity",
      url: "/authenticity",
    },
    {
      id: 3,
      title: "Counterfiets",
      img: "../images/home-counter.webp",
      desc: "At Syrocs Pharmaceutical, we stand resolute against counterfeits, recognizing the grave risks they pose to public health and safety.",
      url: "/counterfeits",
    },
  ];

  return (
    <div className="px-5 py-10 lg:py-20 lg:px-32">
      <h2 className="text-3xl lg:text-5xl uppercase text-center font-title">
        Why Choose Us
      </h2>
      <div className="pt-10 lg:pt-20 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20">
        {data?.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
