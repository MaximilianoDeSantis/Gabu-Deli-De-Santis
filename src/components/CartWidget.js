import React from 'react'
import CartImg from '../img/svg/cart.svg'

export default function CartWidget() {
  return (
    <button id="btn-cart" className="border-0 bg-body d-flex  gap-2" data-bs-toggle="modal" data-bs-target="#modal-cart">
        <img id="btn-cart" className='align-self-center' src={CartImg} alt="Cart" />
        {/* <div className='align-self-center rounded-circle bg-black text-white p-2'>3</div> */}
    </button>
  )
}


/**  Intento agregar una imagen por fuera de la carpeta SRC y me da este error, como seria la forma correcto de acomodar los archivos?
 * yo normalmente tenia en SRC los archivos HTML CSS JS y en Public las imagenes
 * 
 * 
 * ERROR in ./src/components/CartWidget.js 5:0-52

Module not found: Error: You attempted to import ../../public/img/svg/cart.svg which falls outside of the project src/ directory. Relative imports outside of src/ are not supported.
You can either move it inside src/, or add a symlink to it from project's node_modules/.
 * 
 * 
*/