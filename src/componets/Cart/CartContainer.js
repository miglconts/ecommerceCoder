import React, { useContext } from "react";
import { cartContext } from "../../storage/cartContext";

export default function CartContainer() {
  const { cart, totalPrice } = useContext(cartContext);

  if (cart.length === 0) {
    return (
      <div className=" mx-auto flex-col flex-wrap items-stretch justify-evenly  w-6/12 mt-10">
        <h2 className="text-9xl font-black text-blue-900 text-center mx-auto">
          Carrito vacio
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-96 h-96 text-blue-900 hover:text-blue-600 mx-auto"
        >
          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
        </svg>
      </div>
    );
  } else {
    return (
      <div className="container w-8/12 mx-auto mt-10">
        <h2>Items </h2>
        <table className="">
          <tbody>
            {cart.map((item) => (
              <tr>
                <td className="w-6/12"> {item.title}</td>
                <td className="w-6/12"> {item.count}</td>
                <td className="w-6/12"> ${item.price}</td>
                <td className="w-6/12"> {item.count * item.price}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td>total</td>
              <td>{totalPrice}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
