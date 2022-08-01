import Item from "./Item";

const ItemList = ({ products }) => {

  console.log(products)
  return (
     <h1>Testeando Fetch firebase</h1>

     // ERROR .map al objeto products

    // <div className="justify-content-center row row-cols-1 row-cols-sm-2 g-3">
    //   {products.map((el) => (
    //     <Item {...el} key={el.id} />
    //   ))}
    // </div>
  );
};

export default ItemList;