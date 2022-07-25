import ItemCount from './ItemCount';
import { useContext, useState } from "react";
import { Link, NavLink} from "react-router-dom";
import CartContext from '../context/CartContext';




const ItemDetail = ({item}) => {

  const {title,image,description,price} = item[0];

  const [btnCart, setBtnCart] = useState(false)
  const {addItem} = useContext(CartContext)




  // Enviar item y la cantidad a cartContext
  const addToCart = (count) => {
    setBtnCart(true);
    addItem({...item[0], cantidad: count});
  
  };


    return (
 
      <div className="card">
        <div className="row g-0">
          <div className="col-5 col-sm-4">
            <img
              src={image}
              className="img-fluid w-100"
              alt="card-horizontal"
            />
          </div>
          <div className="col-7 col-sm-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">$ {price}</p>
              {!btnCart
              ? <ItemCount stock={10} start={1} onAdd={addToCart} />
              : <Link to= "/cart" > <button type="button" className="btn btn-secondary ">Ir al carrito</button> </Link> 
              }
              <Link to= "/" > <button type="button" className="btn btn-secondary ">Volver</button> </Link>
              
            </div>
          </div>
        </div>
      </div>

    );
  };
  
  export default ItemDetail;
  