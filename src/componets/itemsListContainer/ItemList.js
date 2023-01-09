import React from "react";
import Item from "./Item";

export default function ItemList(props) {
  const { products } = props;
  return (
    <>
      {products.map((product) => (
        <Item
          id={product.id}
          title={product.title}
          img={product.img}
          price={product.price}
          description={product.description}
          key={product.id}
        />
      ))}
    </>
  );
}
