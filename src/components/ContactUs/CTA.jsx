import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <div
      className="py-16 bg-white"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/copy-space-wavy-white-background-layers_23-2148845469.jpg?w=826&t=st=1703842381~exp=1703842981~hmac=104ffdee7a5197c73d98c5ddbbc25e8f96231626a49193828d7764d83dee7885)",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
        <div className="justify-center text-left gap-6 md:text-left md:flex lg:items-center  lg:gap-16">
          <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
            <h1 className="text-2xl text-gray-700 font-bold md:text-3xl">
              <span className="text-blue-500 !text-4xl">
                Syrocs Pharmaceutical
              </span>{" "}
              We're dedicated to improving lives and shaping a healthier future.
              Your well-being is our priority
            </h1>
            <p className="text-base lg:text-lg">
              We're dedicated to improving lives and shaping a healthier future.
              Your well-being is our priority
            </p>
            <div className="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
              <button
                type="button"
                title="Contact Us"
                className="w-full py-3 px-6 text-center rounded-xl transition bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max"
              >
                <Link
                  href={"/contact-us"}
                  className="block text-white font-semibold"
                >
                  Contact Us
                </Link>
              </button>
              <button
                type="button"
                title="About Us"
                className="w-full order-first py-3 px-6 text-center rounded-xl bg-gray-200 transition hover:bg-gray-300 active:bg-gray-300 focus:bg-gray-200 sm:w-max"
              >
                <Link
                  href={"/about-us"}
                  className="block text-gray-600 font-semibold"
                >
                  About Us
                </Link>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
            <div className="col-span-2 row-span-4">
              <img
                src="./banner-images/ctc1.avif"
                className="rounded-full"
                width="640"
                height="960"
                alt="syrocs"
                loading="lazy"
              />
            </div>
            <div className="col-span-2 row-span-2">
              <img
                src="./banner-images/ctc2.jpeg"
                className="w-full h-full object-cover object-top rounded-xl"
                width="640"
                height="640"
                alt="syrocs"
                loading="lazy"
              />
            </div>
            <div className="col-span-3 row-span-3">
              <img
                src="./banner-images/ctc3.jpeg"
                className="w-full h-full object-cover object-top rounded-xl"
                width="640"
                height="427"
                alt="syrocs"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
