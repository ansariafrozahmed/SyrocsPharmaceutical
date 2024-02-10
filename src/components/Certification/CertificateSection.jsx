"use client";
import { ADMINURL } from "@/app/page";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Dialog, DialogBody } from "@material-tailwind/react";

const CertificateSection = () => {
  const [certificateData, setCertificateData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setOpen(true);
    setSelectedImage(image);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };
  // console.log(ADMINURL);
  // console.log(
  //   certificateData[0].images[0]?.replace(/\\/g, "/").replace(/"/g, "")
  // );

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch(`${ADMINURL}api/getAllCertificates`);
        if (!response.ok) {
          console.log("RESPONSE ERROR");
        }
        const result = await response.json();
        setCertificateData(result);
        setIsLoading(false);
        // console.log(result, "RESULTTTTTTTTTTTTTT");
      } catch (error) {
        console.log("CATCH BLOCK ERROR");
      }
    };

    fetchCertificates();
  }, []);

  return (
    <>
      <div className="px-5 py-20 lg:p-20">
        <div className="text-center w-full space-y-2">
          <h2 className="text-4xl lg:text-5xl uppercase">Quality 100%</h2>
          <h3 className="lg:text-xl text-gray-700 pb-8">
            Your health is most important for us
          </h3>
          <p className="text-gray-700 text-justify">
            At Syrocs Pharmaceutical, our resolute commitment to quality is at
            the core of everything we do. As a Germany-based pharmaceutical
            company, we understand the critical role that quality plays in the
            development, manufacturing, and distribution of life-saving
            medications. That's why we proudly uphold the highest standards and
            have earned numerous quality certificates to validate our dedication
            to excellence.
          </p>
          <br />
          <p className="text-gray-700 text-justify">
            When you choose Syrocs Pharmaceutical, you are choosing a partner
            dedicated to providing healthcare solutions of the highest quality.
            Our quality certificates are not just pieces of paper; they
            represent our ongoing commitment to the well-being of our patients
            and the trust placed in us by healthcare professionals worldwide.
          </p>
          <br />
          <p className="text-gray-700 text-justify">
            Founded in 2024, Syrocs emerged as a testament to our unwavering
            commitment to excellence in pharmaceuticals. Over the years, our
            team has honed its expertise, and our journey has been marked by
            innovation, growth, and the pursuit of the highest industry
            standards. With a foundation built on experience and propelled by an
            innovative approach to marketing and packaging, Syrocs stands as a
            symbol of quality, reliability and uniqueness.
          </p>
        </div>
        {/* -------------------- */}
        <div className="py-20">
          <h2 className="text-3xl lg:text-4xl ">Quality certificates</h2>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-5">
              {Array(4)
                .fill()
                .map((_, index) => (
                  <div className="aspect-[4/4]">
                    <Skeleton height={"100%"} width={"100%"} />
                    <Skeleton height={30} />
                  </div>
                ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-5">
              {certificateData?.map((item, index) => (
                <>
                  {/* <div
                    className="shadow-md border text-center space-y-3"
                    key={index}
                  >
                    <div className="aspect-[4/4] overflow-hidden">
                      <img
                        src={`${ADMINURL}${item?.images[0]
                          ?.replace(/\\/g, "/")
                          .replace(/"/g, "")}`}
                        className="h-full w-full object-cover cursor-pointer"
                        onClick={() =>
                          handleOpen(
                            `${ADMINURL}${item?.images[0]
                              ?.replace(/\\/g, "/")
                              .replace(/"/g, "")}`
                          )
                        }
                        alt=""
                      />
                    </div>
                    <h2 className="text-lg p-3 capitalize font-medium">
                      {item?.certificate_title}
                    </h2>
                  </div> */}
                  <div
                    key={index}
                    onClick={() =>
                      handleOpen(
                        `${ADMINURL}${item?.images[0]
                          ?.replace(/\\/g, "/")
                          .replace(/"/g, "")}`
                      )
                    }
                    class="relative cursor-pointer flex w-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
                  >
                    <div class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                      <img
                        class="object-cover h-full w-full"
                        src={`${ADMINURL}${item?.images[0]
                          ?.replace(/\\/g, "/")
                          .replace(/"/g, "")}`}
                        alt="product image"
                      />
                    </div>
                    <div class="mt-4 px-5 pb-5">
                      <span>
                        <h5 class="text-lg tracking-tight text-center text-slate-900">
                          {item?.certificate_title}
                        </h5>
                      </span>
                    </div>
                  </div>
                </>
              ))}

              <Dialog open={open} handler={handleClose}>
                <DialogBody className="">
                  {selectedImage && (
                    <img
                      src={selectedImage}
                      className="h-full w-full object-cover"
                      onClick={handleClose}
                      alt=""
                    />
                  )}
                </DialogBody>
              </Dialog>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CertificateSection;
