import CartWidget from "./CartWidget";
import logo from "../assets/svg/logo.svg";

import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <header className="container-md d-flex justify-content-between gap-3 mt-3 mb-5">
      <NavLink to="/">
        <img src={logo} alt="Logo Gabu Deli" />
      </NavLink>
      <h1 className="align-self-center">Gabu Deli</h1>
      <CartWidget />
    </header>
  );
};

export default NavBar;