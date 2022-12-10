import React from "react";
import { useEffect, useState } from "react";
import { getProducts, getProductCategory } from "../../API/Service";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const categoryID = useParams().categoryID;
  useEffect(() => {
    !categoryID
      ? getProducts().then((response) => setProducts(response))
      : getProductCategory(categoryID).then((responseFilter) =>
          setProducts(responseFilter)
        );
  }, [categoryID]);

  return (
    <div className="container mx-auto flex flex-wrap items-stretch justify-evenly  w-10/12">
      <ItemList products={products}></ItemList>
    </div>
  );
}
