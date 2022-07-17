const ItemDetail = ({item}) => {
  console.log(item)
    return (
      <div className="card">
        <div className="row g-0">
          <div className="col-5 col-sm-4">
            <img
              src={item.image}
              className="img-fluid w-100"
              alt="card-horizontal"
            />
          </div>
          <div className="col-7 col-sm-8">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text">$ {item.price}</p>
              <button type="button" className="btn btn-primary">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ItemDetail;
  