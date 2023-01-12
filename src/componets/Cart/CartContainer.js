import React, { useContext } from "react";
import { createOrder } from "../../API/firebase";
import { cartContext } from "../../storage/cartContext";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function CartContainer() {
  const { cart, totalPrice } = useContext(cartContext);
  const navigateTo = useNavigate();

  const handleCheckout = () => {
    const order = {
      buyer: {
        name: "Miguel Contreras",
        email: "migl@conts.com",
        phone: 222333455,
      },
      items: cart,
      total: totalPrice,
      date: new Date(),
    };
    createOrder(order).then((id) => {
      swal({
        title: "Gracias",
        text: `Compra realizada con éxito ${order.buyer.name}, tu orden de compra es $${id}, espera unos segundos para ver el detalle de tu compra`,
        icon: "success",
        button: "Cerrar",
      });
      navigateTo(`/order/${id}`);
    });
  };

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
      <div className="flex-col justify-center items-center w-10/12 mx-auto mt-10">
        <h2 className="text-5xl font-black text-indigo-900 text-center mx-auto h-auto px-4 py-2 w-auto  bg-blue-800  bg-clip-padding backdrop-filter  bg-opacity-20 border border-gray-100 rounded-2xl backdrop-blur-lg [ px-2 py-4 md:px-4  md:py-2 lg:px-4 lg:py-2 ] [ bg-gradient-to-b from-white/60 to-white/30 ] [ border-[1px] border-solid border-white border-opacity-30 ] [ shadow-black/70 shadow-2xl ] hover:bg-blue-200  my-1 text-blue-700 font-bold">
          Carrito de compra
        </h2>
        <table className="table-auto  w-full border-separate border-spacing-2 h-auto px-4 py-2 bg-blue-800  bg-clip-padding backdrop-filter  bg-opacity-20 border border-gray-100 rounded-2xl text-[#1A2421] backdrop-blur-lg [ px-2 py-4 md:px-4  md:py-2 lg:px-4 lg:py-2 ] [ bg-gradient-to-b from-white/60 to-white/30 ] [ border-[1px] border-solid border-white border-opacity-30 ] [ shadow-black/70 shadow-2xl ] hover:bg-blue-200  my-1 text-blue-700 font-bold">
          <thead>
            <tr className="bg-indigo-400 text-white border-spacing-0 h-12">
              <th>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </th>
              <th> Título</th>
              <th> Cantidad </th>
              <th> Precio</th>
              <th> Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr className="text-center bg-indigo-100 text-indigo-900 border-spacing-0 h-12">
                <td>
                  {" "}
                  <button>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      className="w-6 h-6 stroke-red-600  hover:stroke-red-900"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
                      />
                    </svg>
                  </button>
                </td>
                <td> {item.title}</td>
                <td> {item.count}</td>
                <td> ${item.price}</td>
                <td> ${item.count * item.price}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className="text-center font-bold bg-indigo-400 text-white border-spacing-0 h-12">
                TOTAL
              </td>
              <td className="text-center bg-indigo-100 text-indigo-900 border-spacing-0 h-12 font-bold">
                ${totalPrice}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex items-center justify-end">
          <button
            className="btn btn-blue h-auto px-4 py-2 w-fit  bg-green-800  bg-clip-padding backdrop-filter  bg-opacity-20 border border-gray-100 rounded-2xl text-[#1A2421] backdrop-blur-lg [ px-2 py-4 md:px-4  md:py-2 lg:px-4 lg:py-2 ] [ bg-gradient-to-b from-white/60 to-white/30 ] [ border-[1px] border-solid border-white border-opacity-30 ] [ shadow-black/70 shadow-2xl ] hover:bg-green-200  my-1 text-green-700 font-bold text-lg"
            onClick={handleCheckout}
          >
            {" "}
            Finalizar Compra
          </button>
        </div>
      </div>
    );
  }
}
