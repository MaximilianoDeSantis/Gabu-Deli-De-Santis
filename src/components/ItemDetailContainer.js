import ItemDetail from "./ItemDetail";
import { useState } from "react";

import products from "../products.json";

const ItemDetailContainer = ({item}) => {
  // const [itemSelected, newItemSelected] = useState();
  // const getItem = (item) => {
  //   newItemSelected(item);
  // };

  return <ItemDetail item={products[0]} />;
};

export default ItemDetailContainer;
