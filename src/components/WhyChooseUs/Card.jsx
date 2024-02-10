import Link from "next/link";
import React from "react";

const Card = ({ item }) => {
  return (
    <div key={item.id}>
      <Link href={item.url}>
        <div className="md:aspect-[3/4] bg-black overflow-hidden">
          <img
            src={item.img}
            className="h-full transition-all ease-in-out hover:scale-105 duration-500 w-full object-cover"
          />
        </div>
      </Link>
      <div className="space-y-2 py-5">
        <Link href={item.url}>
          <h2 className="text-3xl">{item.title}</h2>
        </Link>
        <p className="text-gray-700">{item.desc}</p>
      </div>
    </div>
  );
};

export default Card;
