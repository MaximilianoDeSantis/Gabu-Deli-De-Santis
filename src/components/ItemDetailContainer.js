import ItemDetail from "./ItemDetail";
import {useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {getDetailItem} from '../firebase'
import Loader from "./Loader";


const ItemDetailContainer = () => {

  let {itemSelected} = useParams();

  // const item = products.filter(el => el.id == itemSelected)


  // Loading Mock 1seg para mostrar detalles del producto seleccionado
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);



  useEffect(() => {
    getDetailItem(itemSelected).then((snap) => {

      setItem(snap.data());

      setItem(snap.data());

    })
    
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [itemSelected]);




  return (
    <>
      {loading ? <Loader /> : <ItemDetail item={item} />}
    </>);
};

export default ItemDetailContainer;
