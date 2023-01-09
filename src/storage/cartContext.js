import { createContext, useState } from "react";

export const cartContext = createContext([]);
const Provider = cartContext.Provider;

export function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  const cartLenght = () => {
    return cart.length;
  };

  const addToCart = (item, count) => {
    let indexItemInCart = cart.findIndex(
      (itemInContext) => itemInContext.id === item.id
    );
    const newCart = [...cart];
    indexItemInCart !== -1
      ? (newCart[indexItemInCart].count += count)
      : newCart.push({ ...item, count: count });
    setCart(newCart);
  };

  const totalItemsIncart = cart.reduce((acumulator, currentValue) => {
    return acumulator + currentValue.count;
  }, 0);

  const totalPrice = cart.reduce((acumulator, currentValue) => {
    return acumulator + currentValue.price * currentValue.count;
  }, 0);

  /*   const clearCart = () => {
    setCart([]);
  }; */

  return (
    <Provider
      value={{
        cart,
        setCart,
        cartLenght,
        addToCart,
        totalItemsIncart,
        totalPrice,
      }}
    >
      {props.children}
    </Provider>
  );
}
