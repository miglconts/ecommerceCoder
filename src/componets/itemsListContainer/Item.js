import React from "react";
import { Link } from "react-router-dom";

export default function Item(props) {
  const { img, title, price, description, id } = props;
  return (
    <>
      <div className="w-8/12 m-2 p-5 h-auto  bg-blue-900  bg-clip-padding backdrop-filter  bg-opacity-5 border border-gray-100 max-w-sm rounded-2xl text-[#1A2421] backdrop-blur-lg [ p-8 md:p-10 lg:p-10 ] [ bg-gradient-to-b from-white/60 to-white/30 ] [ border-[1px] border-solid border-white border-opacity-30 ] [ shadow-black/70 shadow-2xl ] relative">
        <h2 className="text-xl text-blue-800 mb-2 font-semibold">{title}</h2>
        <img
          className="my-2 h-64 w-full object-cover"
          alt={description}
          src={img}
        ></img>
        <h3 className="my-2">${price}.00</h3>
        <h4 className="mt-2 mb-16">{description}</h4>
        <div className=" absolute inset-x-0 bottom-0 self-end justify-self-end place-self-end flex align-end h-fit justify-center items-end ">
          <Link to={`/product/${id}`}>
            <button className=" btn btn-blue h-auto px-4 py-2 w-auto  bg-blue-400  bg-clip-padding backdrop-filter  bg-opacity-20 border border-gray-100 rounded-2xl text-[#1A2421] backdrop-blur-lg [ px-2 py-4 md:px-4  md:py-2 lg:px-4 lg:py-2 ] [ bg-gradient-to-b from-white/60 to-white/30 ] [ border-[1px] border-solid border-white border-opacity-30 ] [ shadow-black/70 shadow-2xl ] hover:bg-blue-200   mb-6  text-blue-700 font-bold">
              Ver producto
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
