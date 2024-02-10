"use client";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../ProductDetailsPage/BreadCrumb";
import { useSearchParams } from "next/navigation";
import { ADMINURL } from "@/app/page";
import Link from "next/link";
import "./blog.css";

const BlogPage = () => {
  const params = useSearchParams();
  const blogid = params.get("id");
  const [latestBlogs, setLatestBlogs] = useState(null);
  const [blogData, setBlogData] = useState(null);
  const [date, setDate] = useState(null);

  // console.log(blogData?.created_at);
  useEffect(() => {
    const dateString = blogData?.created_at; // Assuming created_at is a string like "2024-01-08T11:49:45.220Z"
    // Convert the string to a Date object
    const dateObject = dateString ? new Date(dateString) : null;

    // Check if the conversion was successful
    if (dateObject instanceof Date && !isNaN(dateObject)) {
      const formattedDate = dateObject.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });

      // console.log(formattedDate, "00000");
      setDate(formattedDate);
    } else {
      console.error("Invalid date string:", dateString);
    }
  }, [blogData]);

  useEffect(() => {
    const fetchBlogById = async () => {
      const response = await fetch(`${ADMINURL}api/getBlogById/${blogid}`);
      const result = await response.json();
      console.log(result.data);
      setBlogData(result.data);
    };
    fetchBlogById();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch(`${ADMINURL}api/getAllBlogs`);
      const result = await response.json();
      // console.log(result, "LATEST");
      setLatestBlogs(result);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-[#f4f4f4] py-4 lg:py-10 px-4 lg:px-24 lg:flex gap-5 w-full">
      <div className="lg:w-[73%] p-2 lg:p-3 bg-white mb-5 rounded-lg">
        <BreadCrumb
          label1={"Blogs"}
          // label2={blogData?.blog_title}
          url={"/blogs"}
        />
        <div className="p-2 lg:p-3 space-y-2">
          <h1 className="text-[1.5rem] lg:text-[2rem] font-title leading-tight">
            {blogData?.blog_title}
          </h1>
          <span className="text-gray-700 tracking-wider text-sm">
            Published by{" "}
            <span className="text-black">{blogData?.author || "NA"}</span> on{" "}
            <span className="text-black">{date || "NA"}</span>
          </span>
          <img
            className="w-[100%] py-5 h-auto"
            src={`${ADMINURL}${blogData?.big_image?.replace(/\\/g, "/")}`}
            alt=""
          />
          <p
            className="space-y-3 blogdescription"
            dangerouslySetInnerHTML={{ __html: blogData?.blog_content }}
          />
        </div>
      </div>
      <div className="h-[100%] lg:w-[27%] p-3 lg:p-5 bg-white sticky top-10 rounded-lg font-title">
        <h2 className="mb-5 font-medium font-title text-2xl">LATEST POST</h2>
        {latestBlogs?.slice(0, 3)?.map((item, index) => (
          <div key={index} className="bg-[#f4f4f4] p-3 rounded-lg mb-2">
            <Link href={`/blog/${item?.blog_title}?id=${item?.id}`}>
              <div className="h-[120px] rounded-lg overflow-hidden">
                <img
                  className="h-full w-full object-cover transition-all ease-in-out hover:scale-105"
                  src={
                    item?.feature_image
                      ? `${ADMINURL}${item.feature_image?.replace(/\\/g, "/")}`
                      : "./Placeholder.webp"
                  }
                  alt=""
                />
              </div>
              <div className="py-2">
                <h2 className="text-lg line-clamp-1">{item?.blog_title}</h2>
                <p className="text-sm text-gray-800 line-clamp-2">
                  {item?.description}
                </p>
                <span className="text-gray-700 text-xs">
                  Published on 23rd Dec 2023
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
