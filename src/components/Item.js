import getItem from "./ItemDetailContainer";

const Item = (el) => {
  return (
    <div className="card w-25 h-25 p-3 mi-1">
      <img src={el.image} className="card-img-top w-50 " alt="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{el.title}</h5>
        <p className="text-muted">$ {el.price}</p>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            getItem(el);
          }}
        >
          Detalles
        </button>

        {/* <div className="d-flex justify-content-center gap-1">
          { <button type="button" className="btn btn-primary">
            Comprar
          </button> }
        </div> */}
      </div>
    </div>
  );
};

export default Item;
