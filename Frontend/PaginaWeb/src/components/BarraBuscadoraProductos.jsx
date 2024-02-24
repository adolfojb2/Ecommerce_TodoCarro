import React from 'react';
import '../styles/barrabuscadoraproductos.css'
import { RiSearchEyeLine } from "react-icons/ri";

function BarraBuscadoraProductos() {
  return (
    <div className='div-form'>
      <form method='get'>
        <input type='text' placeholder='Busque su repuesto...'></input>
        <button type='submit' className='btn-buscar'><RiSearchEyeLine className='icono-buscador' /></button>
      </form>
    </div>
  )
}

export default BarraBuscadoraProductos
