"use client";
import React, { useEffect, useState } from "react";
import RelatedProductSlider from "../Slider/RelatedProductSlider";
import { ADMINURL } from "@/app/page";

const RelatedProducts = ({ category }) => {
  //   console.log(category, "RELATEDDDD");

  const [relatedProducts, setRelatedProducts] = useState(null);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      const response = await fetch(
        `${ADMINURL}api/getProductsByCategory/${category}`
      );
      const result = await response.json();
      //   console.log(result, "RELATED");
      setRelatedProducts(result);
    };

    fetchRelatedProducts();
  }, []);

  return (
    <>
      <div>
        <h2 className="text-3xl lg:text-4xl uppercase">Related Products</h2>
        <div className="py-10">
          <RelatedProductSlider data={relatedProducts} />
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
