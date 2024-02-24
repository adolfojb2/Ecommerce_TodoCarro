import React from 'react';
import '../styles/pagadesdecasa.css';

function PagaDesdeCasa() {
  return (
    <section className='seccion-paga-desde-casa'>
      <h1 className='titulo-paga-desde-casa'>Paga sin salir de casa</h1>
      <div className='contenedor-contenido-paga-desde-casa'>
        <p className='descripcion-paga-desde-casa'>Contamos con todos los medios de pago para que le sea cómodo pagar desde cualquier lugar.</p>
        <div className='contenedor-formas-de-pagos'>
            <img src='Paypal.png' className='logo-forma-pago-1' alt='logo forma de pago'></img>
            <img src='Visa.jpg' className='logo-forma-pago-2' alt='logo forma de pago'></img>
            <img src='Pse.png' className='logo-forma-pago' alt='logo forma de pago'></img>
            <img src='Efecty.png' className='logo-forma-pago-4' alt='logo forma de pago'></img>
            <img src='Mastercard.png' className='logo-forma-pago-5' alt='logo forma de pago'></img>
        </div>
      </div>
    </section>
  )
}

export default PagaDesdeCasa
