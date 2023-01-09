import React, { useContext } from "react";

import { cartContext } from "../storage/cartContext";

export default function Blog() {
  const miContexto = useContext(cartContext);
  console.log(miContexto);
  return <div>Hola datos</div>;
}
