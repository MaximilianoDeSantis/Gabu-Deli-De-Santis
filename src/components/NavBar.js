import React from 'react'
import CartWidget from './CartWidget'
import logo from '../img/svg/logo.svg'



export default function NavBar() {
  return (

    <header className="container-md d-flex justify-content-between gap-3 mt-3 mb-5">
            <a href="../../public/index.html"><img src={logo} alt="Logo Gabu Deli" /></a>
            <h1 className="align-self-center">Gabu Deli</h1>
            <CartWidget />   
    </header>
  )
}
