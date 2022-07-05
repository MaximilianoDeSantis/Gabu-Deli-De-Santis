import React from 'react'
import ItemCount from './ItemCount'




export default function ItemListContainer({greeting}) {

    function addToCart (count)  {
        //Momentaneamente controlado con alerts
        // La Funcion la agregue aca porque en el PDF dice de pasar una funcion por parametros, pero no se si seria mejor todo el control este dejarlo en el archivo ItemCount
        alert(`Se ingresaron ${count} articulos`)
    }




  return (
    <>
        <h2>{greeting}</h2>
        <ItemCount stock={10} start={1} onAdd={addToCart}/>
    </>
    
  )
}
