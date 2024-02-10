import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const MenuMobile = ({
  showCatMenu,
  setShowCatMenu,
  setMobileMenu,
  subMenuData,
}) => {
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

  // const subMenuData = [
  //   { id: 1, name: "Oral", url: "/category/oral" },
  //   { id: 2, name: "Injectables", url: "/category/injectable" },
  // ];
  return (
    <>
      <ul className="flex flex-col lg:hidden font-bold absolute top-[80px] left-0 w-full h-[calc(100svh-80px)] bg-white border-t text-black">
        {data.map((item) => {
          return (
            <React.Fragment key={item.id}>
              {!!item?.subMenu ? (
                <li
                  className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                  onClick={() => setShowCatMenu(!showCatMenu)}
                >
                  <div
                    className="flex justify-between items-center"
                    onClick={() => setMobileMenu(true)}
                  >
                    {item.name}
                    <BsChevronDown size={14} />
                  </div>

                  {showCatMenu && (
                    <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                      {subMenuData?.map((item, index) => {
                        return (
                          <Link key={index} href={`/category/${item?.link}`}>
                            <li
                              onClick={() => setMobileMenu(false)}
                              className="h-12 flex justify-between items-center px-3 hover:bg-gray-100 rounded-md transition-all ease-in-out"
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
                <li className="py-4 px-5 border-b">
                  <Link href={item?.url} onClick={() => setMobileMenu(false)}>
                    {item.name}
                  </Link>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default MenuMobile;
