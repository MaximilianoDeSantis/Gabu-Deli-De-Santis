import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import Loader from "./Loader";
import ItemDetailContainer from "./ItemDetailContainer";
import products from "../products.json";

const ItemListContainer = ({ greetings }) => {

  //LOADER
  const [loading, setLoading] = useState(true);
  // Async Mock
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // const [itemSelected, newItemSelected] = useState();

  return (
    <>
      <div>{greetings}</div>
      {/* <ItemCount stock={10} start={1} onAdd={addToCart} />  Cancelado el mostrar el count del primer proyecto.  */}
      {loading ? <Loader /> : <ItemList products={products} />}

    </>
  );
};

export default ItemListContainer;
