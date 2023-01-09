import React from "react";
import { useEffect, useState } from "react";
import { getProducts, getProductCategory } from "../../API/firebase";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const categoryID = useParams().categoryID;
  useEffect(() => {
    !categoryID
      ? getProducts().then(
          (response) => setProducts(response),
          setIsLoading(false)
        )
      : getProductCategory(categoryID).then(
          (responseFilter) => setProducts(responseFilter),
          setIsLoading(false)
        );
  }, [categoryID]);

  return (
    <div className="container mx-auto flex flex-wrap items-stretch justify-evenly  w-10/12">
      {isLoading ? <Loader /> : <ItemList products={products}></ItemList>}
    </div>
  );
}
