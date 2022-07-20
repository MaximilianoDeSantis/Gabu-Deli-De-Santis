import ItemCount from './ItemCount';
import { useState } from "react";
import { Link, NavLink} from "react-router-dom";


const ItemDetail = ({item}) => {

  const {title,image,description,price} = item[0];

  const [btnCart, setBtnCart] = useState(false)

  // Intente armarlo con un useState pero no podia hacerlo guardarme los datos, siempre que mostraba por consola me lo mostraba vacio,
  // igualmente esto imagino que deberia pasarlo a un context para que lo mantenga global
  const cart = []

  const addToCart = (count) => {

    setBtnCart(true);
    cart.push({...item,cantidad: count})

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
  