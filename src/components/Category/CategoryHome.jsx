"use client";
import { ADMINURL } from "@/app/page";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CategoryHome = () => {
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(`${ADMINURL}api/getAllCategories`);
        if (!response.ok) {
          console.log("RESPONSE ERROR");
        }
        const result = await response.json();
        setCategory(result);
        setIsLoading(false);
        // console.log(result, "RESULTTTTTTTTTTTTTT");
      } catch (error) {
        console.log("CATCH BLOCK ERROR");
      }
    };

    fetchCategory();
  }, []);

  // console.log(category, "CATEGORY");

  return (
    <div className="px-5 lg:px-10 py-10 lg:py-20">
      <h2 className="text-center text-[2rem] lg:text-5xl pb-10 font-title uppercase">
        Our Categories
      </h2>
      {isLoading ? (
        <div className="h-[60vh] grid md:grid-cols-2 gap-5 lg:gap-10">
          <Skeleton height={"100%"} width={"100%"} />
          <Skeleton height={"100%"} width={"100%"} />
        </div>
      ) : (
        <div className="lg:h-[60vh] grid md:grid-cols-2 gap-5 lg:gap-10">
          {category?.map((item, index) => (
            <div
              key={index}
              className="relative h-full p-5 pt-32 lg:p-12 flex flex-col space-y-1 lg:space-y-3 items-start justify-end rounded-xl shadow-xl"
              style={{
                backgroundImage: `url(${ADMINURL}${item?.images
                  ?.replace(/\\/g, "/")
                  .replace(/"/g, "")})`,
                backgroundRepeat: "no-repeat",
                backgroundPoition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black bg-opacity-50 rounded-xl"></div>
              <h2 className="relative z-10 text-2xl lg:text-3xl font-medium font-title text-white">
                {item?.category_name}
              </h2>
              <p className="relative z-10 md:w-1/2 text-[0.9rem] font-normal tracking-wide lg:text-base text-white !leading-snug line-clamp-2">
                {item?.description}
              </p>
              <Link
                href={`/category/${item?.link}`}
                className="flex items-center z-10 gap-1"
              >
                <h3 className="relative text-lg lg:text-xl text-white">
                  Discover
                </h3>
                <ChevronRight size={18} color="white" className="mt-1" />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryHome;
