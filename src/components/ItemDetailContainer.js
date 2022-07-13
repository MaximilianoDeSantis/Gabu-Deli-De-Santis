import ItemDetail from "./ItemDetail";
import { useState } from "react";

const ItemDetailContainer = () => {
  const [itemSelected, newItemSelected] = useState();
  const getItem = (item) => {
    newItemSelected(item);
  };

  return <ItemDetail item={itemSelected} />;
};

export default ItemDetailContainer;
