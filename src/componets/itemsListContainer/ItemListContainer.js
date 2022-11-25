import React from "react";

export default function ItemListContainer(props) {
  const { greeting } = props;
  return <h1 className="text-5xl font-mono text-teal-900">Hola {greeting} </h1>;
}
