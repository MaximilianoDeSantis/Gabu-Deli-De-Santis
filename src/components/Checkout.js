import React, { useState } from 'react'
import { useContext } from "react";
import CartContext from '../context/CartContext';
import Form from "./Form"
import { setBuy } from '../firebase';
import {Timestamp} from 'firebase/firestore';


export const Checkout = () => {


    const { cartItems, totalPrice,clearAll } = useContext(CartContext)

    const [userData, setUserData] = useState({name:"",phone:"",email:"",address:""})

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
    }

    console.log('Total price')
    console.log(totalPrice())

    const setOrder = (e) => {
        e.preventDefault()
        const fechaOrden = Timestamp.fromDate(new Date())
        const order = {
          buyer: userData,
          cartItems,
          totalPrice: totalPrice(),
          fechaOrden
        }

        clearAll()
        setUserData({name:"",phone:"",email:"",address:""})
        setBuy(order)

    }



  return (
    <>
        <Form userData={userData} handleChange={handleChange} setOrder={setOrder}/>
    </>
    
  )
}
