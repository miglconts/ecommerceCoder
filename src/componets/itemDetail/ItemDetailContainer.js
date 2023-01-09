import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct, } from "../../API/firebase";
import ItemCount from "./ItemCount/ItemCount";
import { cartContext } from "../../storage/cartContext";
import Loader from "../Loader/Loader";

export default function ItemDetalContainer() {
  const { addToCart } = useContext(cartContext);
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { productID } = useParams();
  const [countIncart, setCountIncart] = useState(0);

  async function getData() {
    let respuesta = await getProduct(productID);
    setProduct(respuesta);
    setIsLoading(false);
  }
  useEffect(() => {
    getData();
  });

  const handleAddToCart = (count) => {
    setCountIncart(count);
    addToCart(product, count);
  };

  return (
    <div className="container mx-auto flex flex-wrap items-stretch justify-evenly  w-10/12">
      {isLoading ? (
        <Loader />
      ) : (
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
          {countIncart ? (
            <div className="flex justify-center items-center">
              <Link
                to="/cart"
                className="btn btn-blue h-auto px-4 py-2 w-auto  bg-blue-800  bg-clip-padding backdrop-filter  bg-opacity-20 border border-gray-100 rounded-2xl text-[#1A2421] backdrop-blur-lg [ px-2 py-4 md:px-4  md:py-2 lg:px-4 lg:py-2 ] [ bg-gradient-to-b from-white/60 to-white/30 ] [ border-[1px] border-solid border-white border-opacity-30 ] [ shadow-black/70 shadow-2xl ] hover:bg-blue-200  my-1 text-blue-700 font-bold"
              >
                {" "}
                Ir al carrito
              </Link>
            </div>
          ) : (
            <ItemCount onAddToCart={handleAddToCart}></ItemCount>
          )}
        </div>
      )}
    </div>
  );
}
