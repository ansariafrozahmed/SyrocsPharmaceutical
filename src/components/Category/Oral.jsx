import ProductCard from "@/components/ProductCard/ProductCard";
import React from "react";
import Banner from "../Banners/Banner";

const Oral = () => {
  return (
    <div>
      <Banner
        title={"ORAL"}
        page={"Oral"}
        bgImg={
          "https://img.freepik.com/free-photo/yellow-fever-vaccine-concept-view_23-2150062535.jpg?w=826&t=st=1703657907~exp=1703658507~hmac=b97ad101f827b559884d273bec77b1857e9e6e63b3d18777468397777077aa45"
        }
      />
      <div className="p-5 lg:p-20">
        {/* <div className="text-center w-full space-y-2">
          <h2 className="text-4xl lg:text-5xl uppercase">Oral</h2>
          <h3 className="lg:text-xl text-gray-700 pb-8">
            Look for original products
          </h3>
        </div> */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-10 py-5 lg:py-10">
          {Array(12)
            .fill()
            .map((_, index) => (
              <ProductCard key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Oral;
