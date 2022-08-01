import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import Loader from "./Loader";
import {useParams} from "react-router-dom";
import {fetchItemsByCategory, getProducts} from "../firebase";
import products from "../products.json";

const ItemListContainer = ({ greetings }) => {
  

  /** Control de filtro para mostrar productos */
  let productsToShown;
  let {category} = useParams()

  //productsToShown = fetchItemsByCategory(category)

  category 
    ? productsToShown = products.filter(el => el.category === category)
    : productsToShown = getProducts()
    // : productsToShown = products;


  /** Control del loader */
  const [loading, setLoading] = useState(true);
  /** Control tiempo de carga de productos */
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // const [itemSelected, newItemSelected] = useState();

  return (
    <>
      <div>{greetings}</div>
      {loading ? <Loader /> : <ItemList products={productsToShown} />}

    </>
  );
};

export default ItemListContainer;
