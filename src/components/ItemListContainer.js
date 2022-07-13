import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import Loader from "./Loader";
import ItemDetailContainer from "./ItemDetailContainer";

import products from "../products.json";

const ItemListContainer = ({ greetings }) => {
  const addToCart = (count) => {
    //Momentaneamente controlado con alerts
    // La Funcion la agregue aca porque en el PDF dice de pasar una funcion por parametros, pero no se si seria mejor todo el control este dejarlo en el archivo ItemCount
    alert(`Se ingresaron ${count} articulos`);
  };

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
      <ItemCount stock={10} start={1} onAdd={addToCart} />
      {loading ? <Loader /> : <ItemList products={products} />}
      <ItemDetailContainer />
      {/* <ItemList products={products} /> */}
      {/* <Loader /> */}
    </>
  );
};

export default ItemListContainer;
