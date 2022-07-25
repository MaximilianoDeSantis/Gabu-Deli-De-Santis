import CartImg from "../assets/svg/cart.svg";
import { useState, useEffect, useContext } from "react";
import {Link, NavLink} from "react-router-dom";
import CartContext from '../context/CartContext';

const CartWidget = () => {
  
  const {itemsCount} = useContext(CartContext)
  const [cartCount, setCartCount] = useState(itemsCount());
  
  // Modificar contador del cart
  useEffect(() => {
    setCartCount(itemsCount)
  }, [itemsCount]);


  return (
    <Link to='Cart'>
      <button
        id="btn-cart"
        className="border-0 bg-body d-flex  gap-2"
        data-bs-toggle="modal"
        data-bs-target="#modal-cart"
      >
        <img
          id="btn-cart"
          className="align-self-center"
          src={CartImg}
          alt="Cart"
        />
        <span className="badge bg-primary rounded-pill">
          {cartCount ? cartCount : ""}
        </span>
        {/* Modificar contador cart a la cantidad */}
      </button>
    </Link>
  );
};

export default CartWidget;