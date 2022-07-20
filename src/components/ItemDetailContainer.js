import ItemDetail from "./ItemDetail";
import {useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./Loader";

import products from "../products.json";

const ItemDetailContainer = () => {
  // const [itemSelected, newItemSelected] = useState();
  // const getItem = (item) => {
  //   newItemSelected(item);
  // };

  let {itemSelected} = useParams();
  console.log(itemSelected)

  const item = products.filter(el => el.id == itemSelected)




  // Loading Mock 1seg para mostrar detalles del producto seleccionado
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);




  return (
    <>

      {loading ? <Loader /> : <ItemDetail item={item} />}
    </>);
};

export default ItemDetailContainer;
