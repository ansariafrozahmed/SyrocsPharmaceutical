"use client";
import React from "react";
// import { Slide } from "react-awesome-reveal";

const AboutUsComp = () => {
  return (
    <div className="">
      {/* <Slide direction="left"> */}
      <div className="md:flex h-full px-5 py-10 lg:p-10">
        <div className="md:w-[55%] flex pr-5 lg:p-10 flex-col items-start justify-center space-y-3">
          <div>
            <h2 className="text-3xl lg:text-4xl text-gray-800 font-title font-medium">
              Syrocs
            </h2>
            <h3 className="lg:text-lg tracking-wider font-title">
              PHARMACEUTICALS' LEGACY OF INNOVATION
            </h3>
          </div>
          <p className="text-sm lg:text-base text-gray-800 tracking-wide text-left leading-relaxed">
            Welcome to Syrocs, a cutting-edge pharmaceutical brand dedicated to
            producing Human Grade Pharmaceuticals in the form of tablets,
            capsules, and liquids. Despite being a newly established brand, our
            roots in the pharmaceutical market trace back to 2007 when we
            embarked on our journey in this industry. Today, Syrocs is part of a
            larger group with three other successful pharmaceutical brands,
            leveraging years of collective experience to bring you exceptional
            healthcare solutions.
          </p>
        </div>
        <div className="md:w-[45%] ">
          <div className="h-full">
            <img
              src="./images/about-syrocs.webp"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
      {/* </Slide> */}
      {/* ------------------------ */}
      {/* <Slide direction="right"> */}
      <div className="md:flex flex-row-reverse h-full px-5 py-10 lg:p-10">
        <div className="md:w-[55%] flex pr-5 lg:p-10 flex-col items-start justify-center space-y-3">
          <div>
            <h2 className="text-3xl lg:text-4xl text-gray-800 font-title font-medium">
              Our History
            </h2>
            {/* <h3 className='text-xl tracking-wider font-title'>PHARMACEUTICALS' LEGACY OF INNOVATION</h3> */}
          </div>
          <p className="text-sm lg:text-base text-gray-800 tracking-wide text-left leading-relaxed">
            Founded in 2024, Syrocs emerged as a testament to our unwavering
            commitment to excellence in pharmaceuticals. Over the years, our
            team has honed its expertise, and our journey has been marked by
            innovation, growth, and the pursuit of the highest industry
            standards. With a foundation built on experience and propelled by an
            innovative approach to marketing and packaging, Syrocs stands as a
            symbol of quality, reliability and uniqueness.
          </p>
        </div>
        <div className="md:w-[45%] ">
          <div className="h-full">
            <img
              src="./images/about-history.webp"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
      {/* </Slide> */}
      {/* ------------------------ */}
      {/* <Slide direction="left"> */}
      <div className="md:flex h-full px-5 py-10 lg:p-10">
        <div className="md:w-[55%] flex pr-5 lg:p-10 flex-col items-start justify-center space-y-3">
          <div>
            <h2 className="text-3xl lg:text-4xl text-gray-800 font-title font-medium">
              Why Choose Us
            </h2>
            {/* <h3 className='text-xl tracking-wider font-title'>PHARMACEUTICALS' LEGACY OF INNOVATION</h3> */}
          </div>
          <p className="text-sm lg:text-base text-gray-800 tracking-wide text-left leading-relaxed">
            At Syrocs, we take pride in our location in India, the largest
            supplier of generic drugs by volume. Our state-of-the-art production
            facilities operate under strict WHO and GMP supervision, ensuring
            the utmost quality in every product. Our focus on quality extends
            beyond the manufacturing process to eye-catching packaging,
            reflecting our dedication to excellence.
          </p>
        </div>
        <div className="md:w-[45%] ">
          <div className="h-full">
            <img
              src="./images/about-why.webp"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
      {/* </Slide> */}
      {/* ------------------------ */}
      {/* <Slide direction="right"> */}
      <div className="md:flex h-full flex-row-reverse px-5 py-10 lg:p-10">
        <div className="md:w-[55%] flex pr-5 lg:p-10 flex-col items-start justify-center space-y-3">
          <div>
            <h2 className="text-3xl lg:text-4xl text-gray-800 font-title font-medium">
              From the Founder
            </h2>
            {/* <h3 className='text-xl tracking-wider font-title'>PHARMACEUTICALS' LEGACY OF INNOVATION</h3> */}
          </div>
          <p className="text-sm lg:text-base text-gray-800 tracking-wide text-left leading-relaxed">
            "In 2007, we set out on a mission to redefine pharmaceutical
            excellence. Today, Syrocs stands tall as a testament to our
            dedication, innovation, and customer-centric approach. Our journey,
            marked by experience and a forward-thinking team, has allowed us to
            craft a product line that not only meets but exceeds expectations.
            We invite you to explore our offerings, confident that our
            commitment to quality and customer satisfaction will be evident in
            every interaction with Syrocs."
          </p>
        </div>
        <div className="md:w-[45%] ">
          <div className="h-full">
            <img
              src="./images/about-founder.webp"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
      {/* </Slide> */}
    </div>
  );
};

export default AboutUsComp;
