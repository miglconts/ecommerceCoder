import React from 'react'
import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom'
import { getOrder } from '../../API/firebase';
import Loader from '../Loader/Loader';


export default function OrderContainer() {
  const [order, setOrder] = useState([]);
  const {orderID} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  
  async function getData () {
    const respuesta = await getOrder(orderID);
    setOrder(respuesta);
    setIsLoading(false)
  }
  useEffect(() => {
      getData();
    },[]);  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container mx-auto flex flex-wrap items-stretch justify-evenly  w-full">
      {isLoading 
      ? (<Loader /> ) 
      : (
        <div className="w-full m-2 p-5 h-auto  bg-blue-900  bg-clip-padding backdrop-filter  bg-opacity-5 border border-gray-100  rounded-2xl text-[#1A2421] backdrop-blur-lg [ p-8 md:p-10 lg:p-10 ] [ bg-gradient-to-b from-white/60 to-white/30 ] [ border-[1px] border-solid border-white border-opacity-30 ] [ shadow-black/70 shadow-2xl ] relative mx-auto ">
        <h2 className='text-center text-4xl text-indigo-900 font-bold'>Datos de compra </h2>
        <p className="text-left px-5 text-indigo-900 text-l font-bold" > Cliente: {order.buyer.name}</p>
        <p className="text-left px-5 text-indigo-900 text-l font-bold" > Teléfono: {order.buyer.phone}</p>
        <p className="text-left px-5 text-indigo-900 text-l font-bold" > Email: {order.buyer.email}</p>
        <p className="text-left px-5 text-indigo-900 text-l font-bold" > Orden de compra: {orderID}</p>
    
        <table className="table-auto  w-full mx-auto border-separate border-spacing-2 h-auto px-4 py-2 bg-blue-800  bg-clip-padding backdrop-filter  bg-opacity-20 border border-gray-100 rounded-2xl text-[#1A2421] backdrop-blur-lg [ px-2 py-4 md:px-4  md:py-2 lg:px-4 lg:py-2 ] [ bg-gradient-to-b from-white/60 to-white/30 ] [ border-[1px] border-solid border-white border-opacity-30 ] [ shadow-black/70 shadow-2xl ] hover:bg-blue-200  my-1 text-blue-700 font-bold">
          <thead>
            <tr className="bg-indigo-400 text-white border-spacing-0 h-12">
              <th> Título</th>
              <th> Cantidad </th>
              <th> Precio</th>
              <th> Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item) => (
              <tr className="text-center bg-indigo-100 text-indigo-900 border-spacing-0 h-12">
                <td> {item.title}</td>
                <td> {item.count}</td>
                <td> ${item.price}</td>
                <td> ${item.count* item.price}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td className="text-center font-bold bg-indigo-400 text-white border-spacing-0 h-12">
                TOTAL
              </td>
              <td className="text-center bg-indigo-100 text-indigo-900 border-spacing-0 h-12 font-bold">
                ${order.total}
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        )
      }
    </div>
  )
}
