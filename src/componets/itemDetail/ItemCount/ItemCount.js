import React, { useState } from "react";
import Count from "../../buttons/Count";

export default function ItemCount({ stock, onAddToCart }) {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    count < 5 && setCount(count + 1);
  };

  const handleSubstract = () => {
    count > 1 && setCount(count - 1);
  };

  return (
    <div className="container mx-auto justify-center">
      <div className="flex justify-center items-center">
        <Count
          onButtonTouch={handleSubstract}
          classStyle="btn btn-blue h-auto px-4 py-2 w-auto  bg-red-800  bg-clip-padding backdrop-filter  bg-opacity-20 border border-gray-100 rounded-2xl text-[#1A2421] backdrop-blur-lg [ px-2 py-4 md:px-4  md:py-2 lg:px-4 lg:py-2 ] [ bg-gradient-to-b from-white/60 to-white/30 ] [ border-[1px] border-solid border-white border-opacity-30 ] [ shadow-black/70 shadow-2xl ] hover:bg-red-200  my-1 text-red-700 font-bold"
        >
          -
        </Count>
        <span className=" mx-2 h-auto px-4 py-2 w-auto  bg-blue-100  bg-clip-padding backdrop-filter  bg-opacity-20 border border-gray-100 rounded-2xl text-[#1A2421] backdrop-blur-lg [ px-2 py-4 md:px-4  md:py-2 lg:px-4 lg:py-2 ] [ bg-gradient-to-b from-white/60 to-white/30 ] [ border-[1px] border-solid border-white border-opacity-30 ] [ shadow-black/70 shadow-2xl ]   my-1 text-blue-700 font-bold">
          {count}
        </span>
        <Count
          onButtonTouch={handleAdd}
          classStyle="btn btn-blue h-auto px-4 py-2 w-auto  bg-green-800  bg-clip-padding backdrop-filter  bg-opacity-20 border border-gray-100 rounded-2xl text-[#1A2421] backdrop-blur-lg [ px-2 py-4 md:px-4  md:py-2 lg:px-4 lg:py-2 ] [ bg-gradient-to-b from-white/60 to-white/30 ] [ border-[1px] border-solid border-white border-opacity-30 ] [ shadow-black/70 shadow-2xl ] hover:bg-green-200  my-1 text-green-700 font-bold"
        >
          +
        </Count>
      </div>
      <div className="flex justify-center items-center">
        <Count
          classStyle="btn btn-blue h-auto px-4 py-2 w-auto  bg-blue-800  bg-clip-padding backdrop-filter  bg-opacity-20 border border-gray-100 rounded-2xl text-[#1A2421] backdrop-blur-lg [ px-2 py-4 md:px-4  md:py-2 lg:px-4 lg:py-2 ] [ bg-gradient-to-b from-white/60 to-white/30 ] [ border-[1px] border-solid border-white border-opacity-30 ] [ shadow-black/70 shadow-2xl ] hover:bg-blue-200  my-1 text-blue-700 font-bold"
          onButtonTouch={() => onAddToCart(count)}
        >
          Agregar al carrito
        </Count>
      </div>
    </div>
  );
}
