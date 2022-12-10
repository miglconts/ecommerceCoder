import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../API/Service";

export default function ItemDetalContainer() {
  const [product, setProduct] = useState([]);
  const { productID } = useParams();

  useEffect(() => {
    getProduct(productID)
      .then((response) => {
        console.log(response);
        setProduct(response);
      })
      .catch((error) => console.log(error));
  });

  return (
    <div className="container mx-auto flex flex-wrap items-stretch justify-evenly  w-10/12">
      <div
        className="w-8/12 m-2 p-5 h-auto  bg-blue-900  bg-clip-padding backdrop-filter  bg-opacity-5 border border-gray-100  rounded-2xl text-[#1A2421] backdrop-blur-lg [ p-8 md:p-10 lg:p-10 ] [ bg-gradient-to-b from-white/60 to-white/30 ] [ border-[1px] border-solid border-white border-opacity-30 ] [ shadow-black/70 shadow-2xl ] relative
        "
      >
        <h2 className="text-xl text-blue-800 mb-2 font-semibold">
          {product.title}
        </h2>
        <img
          className="my-2 h-96 w-full object-cover"
          alt={product.description}
          src={product.img}
        ></img>
        <h3 className="my-2">${product.price}.00</h3>
        <h4 className="mt-2 mb-16">{product.description}</h4>
      </div>
    </div>
  );
}
