"use client";
import { ADMINURL } from "@/app/page";
import Banner from "@/components/Banners/Banner";
import Injectable from "@/components/Category/Injectable";
import Oral from "@/components/Category/Oral";
import ProductCard from "@/components/ProductCard/ProductCard";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Category = () => {
  const params = useParams();
  const { category_name } = params;
  // console.log(category_name);
  const [data, setData] = useState(null);
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryData = async () => {
      const response = await fetch(
        `${ADMINURL}api/getProductsByCategory/${category_name}`
      );
      const result = await response.json();
      // console.log(result);
      setData(result);
      setIsLoading(false);
    };

    const fetchCategory = async () => {
      try {
        const response = await fetch(`${ADMINURL}api/getAllCategories`);
        if (!response.ok) {
          console.log("RESPONSE ERROR");
          return;
        }
        const result = await response.json();

        // Assuming the category data structure has a property called 'category_name'
        const oralCategories = result.filter(
          (category) => category.category_name.toLowerCase() === category_name
        );

        setCategory(oralCategories[0]);
        console.log(oralCategories[0], "CATEGORIES");
      } catch (error) {
        console.log("CATCH BLOCK ERROR");
      }
    };

    fetchCategory();
    fetchCategoryData();
  }, []);

  return (
    <>
      <div>
        <Banner
          title={category?.category_name}
          page={category?.link}
          bgImg={`${ADMINURL}${category?.images}`}
        />
        <div className="px-3 py-10 lg:px-20 lg:py-10">
          <div className="text-center w-full space-y-2">
            {/* <h2 className="text-4xl lg:text-5xl uppercase">Oral</h2> */}
            <h3 className="text-sm lg:text-lg text-left text-gray-700 pb-8">
              {category?.description}
            </h3>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5 py-5 lg:py-10">
              {Array(4)
                .fill()
                .map((item, index) => (
                  <div className="aspect-[3/3]">
                    <Skeleton height={"100%"} width={"100%"} />
                    <Skeleton height={25} width={"80%"} />
                  </div>
                ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5 py-5 lg:py-10">
              {data?.map((item, index) => (
                <ProductCard data={item} key={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Category;
