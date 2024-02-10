import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSkeleton = () => {
  return (
    <>
      <div className="hidden py-10 lg:flex gap-20 px-32">
        <div className="flex gap-5">
          <div className="flex flex-col gap-1">
            <Skeleton height={60} width={60} />
            <Skeleton height={60} width={60} />
            <Skeleton height={60} width={60} />
            <Skeleton height={60} width={60} />
            <Skeleton height={60} width={60} />
            <Skeleton height={60} width={60} />
          </div>
          <div>
            <Skeleton height={400} width={400} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton height={30} width={200} />
          <Skeleton height={20} width={300} />
          <Skeleton width={500} count={6} />
          <br />
          <Skeleton width={500} count={6} />
        </div>
      </div>
      {/* -------Mobile Responsive------- */}
      <div className="lg:hidden flex flex-col p-5 justify-center">
        <div className="flex flex-col-reverse">
          <div className="flex gap-1">
            <Skeleton height={60} width={60} />
            <Skeleton height={60} width={60} />
            <Skeleton height={60} width={60} />
            <Skeleton height={60} width={60} />
            <Skeleton height={60} width={60} />
          </div>
          <div>
            <Skeleton height={300} width={"100%"} />
          </div>
        </div>
        <div className="w-full pt-5 flex flex-col gap-2">
          <Skeleton height={20} width={"70%"} />
          <Skeleton count={6} />
        </div>
      </div>
    </>
  );
};

export default ProductSkeleton;
