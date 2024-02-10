import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const Menu = ({ showCatMenu, setShowCatMenu, subMenuData }) => {
  const path = usePathname();
  // console.log(path);
  const data = [
    {
      id: 1,
      name: "Categories",
      subMenu: true,
    },
    {
      id: 2,
      name: "Certificates",
      url: "/certification",
    },
    {
      id: 3,
      name: "Authenticity",
      url: "/authenticity",
    },
    {
      id: 4,
      name: "Counterfeits",
      url: "/counterfeits",
    },
    {
      id: 5,
      name: "About Us",
      url: "/about-us",
    },
    {
      id: 6,
      name: "Contact Us",
      url: "/contact-us",
    },
    {
      id: 7,
      name: "Blogs",
      url: "/blogs",
    },
  ];

  return (
    <>
      <ul className="hidden lg:flex items-center gap-1 font-medium text-black">
        {data.map((item) => {
          const isActive = path === item.url;

          return (
            <React.Fragment key={item.id}>
              {!!item?.subMenu ? (
                <li
                  className={`cursor-pointer font-title flex items-center group gap-2 relative  `}
                  onMouseEnter={() => setShowCatMenu(true)}
                  onMouseLeave={() => setShowCatMenu(false)}
                >
                  {item.name}
                  <BsChevronDown
                    size={14}
                    className="transition-all ease-in-out duration-500 group-hover:-rotate-180"
                  />

                  {showCatMenu && (
                    <ul className="bg-white rounded-md absolute top-6 pt-5 -left-20 min-w-[256px] px-1 py-1 text-black shadow-lg">
                      {subMenuData?.map((item, index) => {
                        return (
                          <Link
                            key={index}
                            href={`/category/${item?.link}`}
                            onClick={() => setShowCatMenu(false)}
                          >
                            <li
                              className={`h-12 flex justify-between items-center px-3 hover:bg-gray-100 rounded-md transition-all ease-in-out `}
                            >
                              {item.category_name}
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  )}
                </li>
              ) : (
                <li
                  className={`cursor-pointer hover:bg-gray-100 active:bg-gray-200a px-4 transition-all ease-in-out py-2 rounded-full ${
                    isActive ? "bg-gray-200" : ""
                  }`}
                >
                  <Link href={item?.url}>{item.name}</Link>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default Menu;
