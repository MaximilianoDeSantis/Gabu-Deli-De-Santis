import CartImg from "../assets/svg/cart.svg";
import { useState } from "react";
import {Link, NavLink} from "react-router-dom";

const CartWidget = () => {
  const [cartCount, setCartCount] = useState(0);

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