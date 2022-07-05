import React, {useState} from 'react'





export default function ItemCount({stock,start,onAdd}) {
    const [count, setCount] = useState(start);
    const aumentar = () => {
        (count < stock)? setCount(count+1) : setCount(count)
    }

    const disminuir = () => {
        setCount((ant) => (ant > 0 ? count - 1 :  count))
    }

    const checkStock = () => {
        // Faltaria ir actualizando el count mediante se van agregando al carro productos
         (count > stock)? alert('No hay stock suficiente') : onAdd(count)
    }



  return (
    <>
        <div className='d-flex justify-content-center my-5'>
            <button type="button" onClick={disminuir} className="btn btn-outline-secondary" id="input-group-button-left">-</button> 
            <div className='fs-5 mx-3'> {count} </div>
            <button type="button" onClick={aumentar} className="btn btn-outline-secondary " id="input-group-button-left">+</button>
        </div>

        <button type="button" className="btn btn-primary" onClick={checkStock}>Agregar al carro</button>
    </>

    
  )
}
