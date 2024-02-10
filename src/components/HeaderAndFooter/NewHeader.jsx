"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Menu from "./Menu";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "./MenuMobile";
import { ADMINURL } from "@/app/page";
import { MessageSquareText, Search } from "lucide-react";

const NewHeader = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [subMenuData, setSubMenuData] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState(null);
  const [filteredSearchProducts, setFilteredSearchProducts] = useState(null);
  const divRef = useRef(null);
  // console.log(searchText, "SEARCHED");
  const handleCloseDiv = (event) => {
    // Check if the click is outside the div
    if (divRef.current && !divRef.current.contains(event.target)) {
      // Close the div or perform any action you want
      // For example, you can set showSearch to false
      setShowSearch(false);
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener("mousedown", handleCloseDiv);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleCloseDiv);
    };
  }, []);

  const handleSearchIconClick = () => {
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    const fetchSearchProduct = async () => {
      try {
        const response = await fetch(`${ADMINURL}api/getAllProducts`);
        const allProducts = await response.json();
        const filteredProducts = allProducts.filter(
          (product) =>
            product.product_title
              .toLowerCase()
              .includes(searchText.toLowerCase()) ||
            product.description.toLowerCase().includes(searchText.toLowerCase())
        );

        // console.log(filteredProducts);
        setFilteredSearchProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    // Call the function when searchText changes
    fetchSearchProduct();
  }, [searchText]);

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch(`${ADMINURL}api/getAllCategories`);
      const result = await response.json();
      // console.log(result, "CAT");
      setSubMenuData(result);
    };

    fetchCategory();
  }, []);

  const controlNavBar = () => {
    window.scrollY > 200
      ? window.scrollY > lastScrollY && !mobileMenu
        ? setShow("-translate-y-[80px]")
        : setShow("shadow-sm")
      : setShow("translate-y-0");
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`px-5 lg:px-20 h-[12svh] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Link href={"/"} className="flex">
        <img
          src="../images/syrocslogo.png"
          className="w-[120px]"
          alt="Syrocs"
          onClick={() => setMobileMenu(false)}
        />
        {/* <h1 className="font-[500] text-[30px] font-greatvibes">Syrocs</h1> */}
      </Link>

      <Menu
        showCatMenu={showCatMenu}
        setShowCatMenu={setShowCatMenu}
        subMenuData={subMenuData}
        setMobileMenu={setMobileMenu}
      />

      {mobileMenu && (
        <MenuMobile
          subMenuData={subMenuData}
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          setMobileMenu={setMobileMenu}
        />
      )}

      <div className="flex items-center gap-2 text-black">
        <div className=" gap-3 rounded-full flex justify-center items-center cursor-pointer relative">
          <span
            className="lg:hover:bg-gray-200 lg:p-2 rounded-full"
            onClick={handleSearchIconClick}
          >
            <Search strokeWidth={1} size={25} />
          </span>

          <Link
            href={"/contact-us"}
            className="lg:hover:bg-gray-200 lg:p-2 rounded-full"
          >
            <MessageSquareText
              strokeWidth={1}
              size={25}
              onClick={() => setMobileMenu(false)}
            />
          </Link>
        </div>
        {showSearch && (
          <>
            <div
              ref={divRef}
              className="absolute space-y-3 top-[85px] right-5 md:right-20 p-3
              bg-white rounded-lg w-[90%] md:w-[400px] shadow border"
            >
              <div className="flex items-center justify-between border text-gray-700 border-gray-600 w-full rounded-lg p-2">
                <input
                  type="search"
                  className=" outline-none w-full"
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <Search strokeWidth={1} size={25} />
              </div>
              {filteredSearchProducts ? (
                <>
                  <div className="space-y-2 h-[400px] overflow-hidden overflow-y-auto ">
                    {filteredSearchProducts?.map((item, index) => (
                      <Link
                        href={`/product/${item?.product_title}?pid=${item?.id}`}
                        onClick={handleSearchIconClick}
                      >
                        <div
                          key={index}
                          className="w-full hover:bg-gray-100 px-2 py-2 rounded-lg overflow-hidden flex items-start gap-3"
                        >
                          <div className="w-[20%]">
                            <img
                              src={
                                item.main_image
                                  ? `${ADMINURL}${item.main_image?.replace(
                                      /\\/g,
                                      "/"
                                    )}`
                                  : "./Placeholder.webp"
                              }
                              className=" h-full w-full object-cover"
                              alt=""
                            />
                          </div>
                          <div className="w-[80%] space-y-2">
                            <h2 className="text-lg font-medium leading-none text-gray-800 line-clamp-1">
                              {item?.product_title}
                            </h2>
                            <p className="line-clamp-2 text-sm leading-tight text-gray-700">
                              {item?.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="p-5 text-center">
                    <h2 className="text-xl font-semibold text-gray-700">
                      Search For Products
                    </h2>
                  </div>
                </>
              )}
            </div>
          </>
        )}
        {/* Mobile Icon Start */}
        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex lg:hidden justify-center items-center cursor-pointer relative -mr-2">
          {mobileMenu ? (
            <VscChromeClose
              className="text-[20px]"
              onClick={() => setMobileMenu(false)}
            />
          ) : (
            <BiMenuAltRight
              className="text-[30px]"
              onClick={() => setMobileMenu(true)}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default NewHeader;
