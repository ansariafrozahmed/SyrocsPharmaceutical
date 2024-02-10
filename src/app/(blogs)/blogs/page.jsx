"use client";
import { ADMINURL } from "@/app/page";
import Banner from "@/components/Banners/Banner";
import BlogCard from "@/components/Blogs/BlogCard";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BlogPage = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch(`${ADMINURL}api/getAllBlogs`);
      const result = await response.json();
      // console.log(result, "BLOGSSSSSSS");
      setBlogs(result);
      setIsLoading(false);
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <Banner
        title={"Our Blogs"}
        bgImg={"/images/blogbanner.webp"}
        page={"Blogs"}
      />
      {/* ----------------------- */}

      {isLoading ? (
        <div className="p-5 lg:p-14 w-full grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Array(4)
            .fill()
            .map((_, index) => (
              <div>
                <Skeleton height={150} />
                <Skeleton height={30} />
                <Skeleton count={3} />
                <Skeleton width={"60%"} />
              </div>
            ))}
        </div>
      ) : (
        <div className="p-5 lg:p-14 w-full grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-8">
          {blogs?.map((item, index) => (
            <BlogCard key={index} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;
