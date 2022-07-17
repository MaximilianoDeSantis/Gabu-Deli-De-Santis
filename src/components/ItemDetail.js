import ItemCount from './ItemCount';
import { useState } from "react";
import { Link, NavLink} from "react-router-dom";


const ItemDetail = ({item}) => {

  const {title,image,description,price} = item[0];




  const addToCart = (count) => {
    //Momentaneamente controlado con alerts
    // La Funcion la agregue aca porque en el PDF dice de pasar una funcion por parametros, pero no se si seria mejor todo el control este dejarlo en el archivo ItemCount
    alert(`Se ingresaron ${count} articulos`);
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
              <ItemCount stock={10} start={1} onAdd={addToCart} />

              <Link to= "/" > <button type="button" className="btn btn-secondary ">Volver</button> </Link>
              
            </div>
          </div>
        </div>
      </div>

    );
  };
  
  export default ItemDetail;
  