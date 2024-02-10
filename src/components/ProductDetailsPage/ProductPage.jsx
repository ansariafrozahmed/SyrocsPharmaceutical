"use client";
import ProductImage from "./ProductImage";
import Wrapper from "./Wrapper";
import BreadCrumb from "./BreadCrumb";
import RelatedProducts from "./RelatedProducts";
import ProductSkeleton from "./ProductSkeleton";
import { useEffect, useState } from "react";
// import ProductModal from "./ProductModal";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import { ADMINURL } from "@/app/page";
import { useSearchParams } from "next/navigation";
import OneEightyModal from "./OneEightyModal";
const ProductDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState(null);
  const params = useSearchParams();
  const productId = params.get("pid");

  // console.log(productData?.imageCache, "iiub");

  useEffect(() => {
    const fetchProductById = async () => {
      const cachedData = localStorage.getItem(`productData_${productId}`);

      if (cachedData) {
        setProductData(JSON.parse(cachedData));
        setIsLoading(false);
        console.log(productData);
        return;
      }

      try {
        const response = await fetch(
          `${ADMINURL}api/getProductById/${productId}`
        );
        const result = await response.json();

        // Store image data in cache
        // const imageCache = {};
        // await Promise.all(
        //   result?.one_eighty.map(async (imageUrl) => {
        //     // console.log(imageUrl, "0000");
        //     const imageResponse = await fetch(`${ADMINURL}${imageUrl}`, {
        //       method: "GET",
        //       mode: "no-cors",
        //       cache: "default",
        //     });
        //     const imageData = await imageResponse.blob();
        //     imageCache[imageUrl] = URL.createObjectURL(imageData);
        //   })
        // );

        // result.imageCache = imageCache;

        // Store data in cache
        localStorage.setItem(
          `productData_${productId}`,
          JSON.stringify(result)
        );

        setProductData(result);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchProductById();
  }, [productId]);

  return (
    <>
      {isLoading ? (
        <ProductSkeleton />
      ) : (
        <>
          {productData && (
            <>
              <OneEightyModal
                images={productData?.one_eighty}
                prefix={productData?.prefix}
              />
              {/* <ProductModal
                images={productData?.one_eighty}
                prefix={productData?.prefix}
              /> */}
              {/* 3D MODEL */}
              <div className="py-5 flex items-center justify-center">
                <BreadCrumb
                  label1={productData?.category}
                  // label2={productData?.product_title}
                  url={`/category/${productData?.category}`}
                />
              </div>
              <div className="w-full md:py-10">
                <Wrapper>
                  <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    {/* left col start */}
                    <div className="w-full md:w-auto flex flex-col flex-[1] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                      <ProductImage
                        main_image={productData?.main_image}
                        gallery_image={productData?.images}
                      />
                    </div>
                    {/* left col end */}

                    {/* right col start */}
                    <div className="flex-[1] py-3">
                      {/* Product title */}
                      <div className="text-[25px] font-semibold mb-5 leading-tight">
                        {productData?.product_title}
                      </div>
                      {/* Product title end */}
                      <div>
                        <div className="text-xl font-semibold mb-1">
                          Description :
                        </div>
                        {/* Description of product */}
                        <div className="mb-5">
                          <p className="text-justify">
                            {productData?.description}
                          </p>
                        </div>
                      </div>
                      <div>
                        <Link href={"/contact-us"}>
                          <Button
                            variant="gradient"
                            className="font-medium text-[1rem] font-title tracking-wider capitalize"
                          >
                            Contact Us Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                    {/* right col end */}
                  </div>

                  <div className="px-0 lg:px-10 pt-10 lg:pt-20">
                    <RelatedProducts category={productData?.category} />
                  </div>
                </Wrapper>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default ProductDetails;
