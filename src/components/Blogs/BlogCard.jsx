import { ADMINURL } from "@/app/page";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const BlogCard = ({ data }) => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    const dateString = data?.created_at; // Assuming created_at is a string like "2024-01-08T11:49:45.220Z"
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
  }, []);
  return (
    <div className=" rounded-md shadow-lg bg-white border mb-5">
      <div className="overflow-hidden rounded-t-md">
        <Link href={`/blog/${data?.blog_title}?id=${data?.id}`}>
          <img
            src={
              data?.feature_image
                ? `${ADMINURL}${data.feature_image?.replace(/\\/g, "/")}`
                : "./Placeholder.webp"
            }
            alt="Laptop"
            className="h-[150px] w-full transition-all ease-in-out hover:scale-105 duration-500 rounded-t-md object-cover"
          />
        </Link>
      </div>
      <div className="p-3">
        <Link href={`/blog/${data?.blog_title}?id=${data?.id}`}>
          <h2 className="line-clamp-1 hover:text-gray-800 items-center text-lg font-semibold">
            {data?.blog_title}
          </h2>
        </Link>
        <p className="mt-1 text-sm text-gray-600 line-clamp-3">
          {data?.description}
        </p>
        <div className="mt-2">
          <span className="text-xs text-gray-600">
            By {data?.author || "NA"} on {date || "NA"}
          </span>
        </div>

        <Link href={`/blog/${data?.blog_title}?id=${data?.id}`}>
          <button
            type="button"
            className="mt-2 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
