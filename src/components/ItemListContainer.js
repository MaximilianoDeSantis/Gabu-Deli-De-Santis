import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Loader from "./Loader";
import {useParams} from "react-router-dom";
import {getItems,getItemsFiltered} from "../firebase";


const ItemListContainer = () => {

  
  let {category} = useParams()

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {    
  (category === undefined ? (getItems()) : getItemsFiltered(category)).then((snapshot) => {
      setProducts(
        snapshot.docs.map((document) => ({
          ...document.data(),
        }))
      );
      setTimeout(setLoading,2000,false);
    });
  }, [category]);

  return (
    <>
      {loading ? <Loader /> : <ItemList products={products} />}
    </>
  );
};

export default ItemListContainer;
