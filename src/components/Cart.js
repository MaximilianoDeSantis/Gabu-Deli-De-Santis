import { useContext } from "react";
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import CartItem from './CartItem';
import {setBuy} from '../firebase'



const Cart = () => {
    const {cartItems, clearAll, itemsCount, totalPrice } = useContext(CartContext)

    // const comprar = () => {
    //    setBuy(cartItems)
    //    clearAll()
    // }


    return (
        <>
            {/* Si hay items en el carrito renderia */}
            {cartItems.length > 0 && 
                <>
                    <h2>Cantidad total de items: {itemsCount()}</h2>
                    <h2>Precio total: $ {totalPrice()} </h2>

                    <div className="justify-content-center row row-cols-1 row-cols-sm-2 g-3">
                        {cartItems.map((el) => (
                        <CartItem {...el} key={el.id} />
                        ))}
                    </div>
                    <button type="button" className="btn btn-secondary" onClick={clearAll}>Borrar todo</button>
                    <Link to="../Checkout" >
                        <button   button type="button" className="btn btn-primary" >Comprar</button>
                    </Link>
                </>
            }

            {/* Si no hay items en el carrito renderia */}
            {cartItems.length === 0 &&
                <>
                    <h2>No hay items en el carrito</h2>
                    <Link to ="../"><button type="button" className="btn btn-primary" >Ir al inicio</button></Link>
                </>  
            }
        </>


    )

}





export default Cart