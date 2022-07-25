import { createContext, useState } from "react";

const CartContext = createContext()


const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([]);

    const itemsCount = () => {
       return cartItems.length;
    }


    // Buscar si el elemento ya existe en el CART
    const isInCart = (id) => cartItems.find(el => el.id === id)


    // ADD ITEM AL CART
    const addItem = (item) => {

        const check = isInCart(item.id) // Controlar si existe el elemento en cartItems


       
        if (!check) {
            setCartItems([...cartItems, item])
            alert("Nuevo Item agregado al Carrito - ver por consola")
            console.log("CART:")
            console.log(cartItems) // ERROR - No muestra correctamente el contenido del array al primer item agregado
        } 
        else {
            console.log("encontro un item con el mismo ID")
            const i = cartItems.findIndex( index => index.id === item.id)
            const newCart = cartItems
            newCart[i].cantidad = newCart[i].cantidad + item.cantidad;
            setCartItems(newCart);

            alert("Item modificado del Carrito - ver por consola")
            console.log("CART:")
            console.log(cartItems)
        }

     }



     const deleteItem = (id) => {
        
    };

    const clearAll = () => {
        setCartItems([])
    }


     const data = {
        cartItems,
        addItem,
        isInCart,
        deleteItem,
        itemsCount,
        clearAll
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )


}

export { CartProvider };
export default CartContext;