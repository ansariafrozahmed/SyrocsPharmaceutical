"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { ADMINURL } from "@/app/page";

const BlogSection = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch(`${ADMINURL}api/getAllBlogs`);
      const result = await response.json();
      // console.log(result, "BLOGSSSSSSS");
      setBlogs(result);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="py-10 bg-white lg:p-20">
      <h2 className="text-4xl lg:text-5xl uppercase text-center font-title">
        Our Blogs
      </h2>
      <div className="p-5 lg:p-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs?.slice(0, 3)?.map((item, index) => (
          <BlogCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
