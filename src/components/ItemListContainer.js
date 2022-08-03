import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Loader from "./Loader";
import {useParams} from "react-router-dom";
import {getItems,getItemsFiltered} from "../firebase";


const ItemListContainer = () => {

  
  let {nombreCategoria} = useParams()
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
  (nombreCategoria === undefined ? (getItems()) : getItemsFiltered(nombreCategoria)).then((snapshot) => {
      setProducts(
        snapshot.docs.map((document) => ({
          ...document.data(),
        }))
      );
      setTimeout(setLoading,2000,false);
    });
  }, [nombreCategoria]);

  

  return (
    <>
      {loading ? <Loader /> : <ItemList products={products} />}
    </>
  );
};

export default ItemListContainer;
