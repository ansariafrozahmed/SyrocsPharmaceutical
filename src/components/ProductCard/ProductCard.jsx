import { ADMINURL } from "@/app/page";
import Link from "next/link";
import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div className="shadow">
      <Link
        href={`/product/${data?.product_title}?pid=${data?.id}`}
        className=" bg-white cursor-pointer mb-5"
      >
        <div className="aspect-[3/3] overflow-hidden">
          <img
            className="h-full w-full transform transition-all ease-in-out hover:scale-105 duration-500 object-contain"
            src={`${ADMINURL}${data?.main_image}`}
            alt={data?.product_title}
          />
        </div>
        <div className="p-4 text-black/[0.9]">
          <h3 className="text-center text-xs md:text-sm text-gray-700 font-medium">
            {data?.category}
          </h3>
          <h2 className="text-sm lg:text-lg line-clamp-1 font-medium text-center">
            {data?.product_title}
          </h2>
          {/* <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">$20.00</p>
          <p className="text-base font-medium line-through">$25.00</p>
          <p className="ml-auto text-base font-medium text-green-500">
            20% off
          </p>
        </div> */}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
