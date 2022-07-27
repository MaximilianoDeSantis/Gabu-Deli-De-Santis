import { useContext } from 'react'
import CartContext from '../context/CartContext'
import { Link } from 'react-router-dom'


const CartItem = ({id,title,price,image,cantidad}) => {
    
    const { deleteItem } = useContext(CartContext)

    const deleteItemCart = () => {
        deleteItem(id)
    }

    return (
        <div className="card w-25 h-25 p-3 mi-1">
            <img src={image} className="card-img-top w-50 " alt="card-img-top" />
             <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="text-muted">Cantidad: {cantidad}</p>
            <p className="text-muted">Total: $ {price * cantidad}</p>
            <button type="button" className="btn btn-secondary" onClick={deleteItemCart}>Eliminar</button>
      </div>
    </div>
    )
}


export default CartItem