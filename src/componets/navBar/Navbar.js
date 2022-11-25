import React from "react";
import CartWidget from "./CartWidget";

export default function Navbar() {
  return (
    <nav className=" flex items-center justify-between flex-wrap bg-blue-300 p-6">
      <div className="container flex  w-6/12 items-start flex-wrap mx-auto cursor-pointer">
        <div class="flex items-center flex-shrink-0 text-sky-900 mr-16 ">
          <p class="font-black font-mono text-4xl tracking-wide hover:font-thin">
            KILLETTER
          </p>
        </div>

        <div class="w-full block flex-grow text-left lg:flex lg:items-center lg:w-auto">
          <div class="text-xl lg:flex-grow">
            <a
              href="/"
              class="block px-5 mx-1 border-b-4 border-blue-300 hover:border-blue-600   mt-4 lg:inline-block lg:mt-0 text-blue-900 hover:text-blue-600 mr-4"
            >
              Blog
            </a>
            <a
              href="/"
              class="block px-5 mx-1 border-b-4 border-blue-300 hover:border-blue-600   mt-4 lg:inline-block lg:mt-0 text-blue-900 hover:text-blue-600 mr-4"
            >
              Store
            </a>
            <a
              href="/"
              class="block px-5 mx-1 border-b-4 border-blue-300 hover:border-blue-600   mt-4 lg:inline-block lg:mt-0 text-blue-900 hover:text-blue-600"
            >
              About
            </a>
          </div>
          <div>
            <a href="/" class="">
              <CartWidget></CartWidget>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
