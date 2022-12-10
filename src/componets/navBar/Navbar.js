import React from "react";
import CartWidget from "./CartWidget";
import { NavLink, Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();
  const navigateTo = (e) => {
    navigate(`${e.target.value}`);
  };

  return (
    <nav className=" w-full flex items-center justify-between flex-wrap  bg-blue-900  bg-clip-padding backdrop-filter  bg-opacity-5 border border-gray-100  rounded-2xl text-[#1A2421] backdrop-blur-lg [ p-10 md:p-10 lg:p-5 ] [ bg-gradient-to-b from-white/60 to-white/30 ] [ border-[1px] border-solid border-white border-opacity-30 ] [ shadow-black/70 shadow-2xl ]">
      <div className="container flex  w-8/12 items-start flex-wrap mx-auto cursor-pointer">
        <div className="flex items-center flex-shrink-0 text-sky-900 mr-16 ">
          <NavLink to="/">
            <p className="font-black font-mono text-4xl tracking-wide hover:font-thin">
              KILLETTER
            </p>
          </NavLink>
        </div>

        <div className="w-full block flex-grow text-left lg:flex lg:items-center lg:w-auto">
          <div className="text-xl lg:flex-grow">
            <NavLink
              to="/blog"
              className="block px-5 mx-1  mt-4 lg:inline-block lg:mt-0 text-blue-900 hover:text-blue-600 mr-4"
            >
              Blog
            </NavLink>
            <NavLink
              to="/"
              className="block px-5 mx-1  mt-4 lg:inline-block lg:mt-0 text-blue-900 hover:text-blue-600 mr-4"
            >
              Store
            </NavLink>
            <NavLink
              to="/about"
              className="block px-5 mx-1  mt-4 lg:inline-block lg:mt-0 text-blue-900 hover:text-blue-600"
            >
              About
            </NavLink>
          </div>
          <div className="block px-5 mx-1 mt-4 lg:inline-block lg:mt-0 text-blue-900 hover:text-blue-600">
            <select
              class="appearance-none w-50 md:w-60 px-2 rounded-lg"
              onChange={navigateTo}
            >
              <option value="/category/smartphones">Smartphones</option>
              <option value="/category/laptops">Laptops</option>
              <option selected value="/">
                Todas las categorías
              </option>
            </select>
          </div>
          <div>
            <Link to="/" className="">
              <CartWidget></CartWidget>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
