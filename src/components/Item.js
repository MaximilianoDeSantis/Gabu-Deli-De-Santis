import getItem from "./ItemDetailContainer";
import {Link} from "react-router-dom";

const Item = (el) => {
  return (
    <div className="card w-25 h-25 p-3 mi-1">
      <img src={el.image} className="card-img-top w-50 " alt="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{el.title}</h5>
        <p className="text-muted">$ {el.price}</p>

        <Link to={`/producto/${el.id}`}> 
          <button type="button" className="btn btn-secondary">Detalles</button>
        </Link>
        
      </div>
    </div>
  );
};

export default Item;
