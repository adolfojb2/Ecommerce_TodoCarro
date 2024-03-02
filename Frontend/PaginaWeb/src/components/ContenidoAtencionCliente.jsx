import React from 'react';
import '../stylespages/contenidoatencioncliente.css';

function ContenidoAtencionCliente() {
  return (
    <section className='seccion-atencion-cliente'>
      <div className='contenedor-atencion-cliente'>
        <form action="" method="" className='contenedor-formulario'>
          <h1 className='titulo-seccion-atencion-cliente'>¿En que le podemos ayudar?</h1>
          <div className='cuadros-formulario'>
            <img src='person.png' alt='' className='imagen-formulario-atencioncliente' />
            <input type='text' placeholder='Nombre' className='caja-input-atencion-cliente ' required/>
          </div>
          <div className='cuadros-formulario'>
            <img src='email.png' alt='' className='imagen-formulario-atencioncliente' />
            <input type='email' placeholder='example@gmail.com' className='caja-input-atencion-cliente ' required/>
          </div>
          <div className='cuadros-formulario'>
            <img src='person.png' alt='' className='imagen-formulario-atencioncliente' />
            <input type='text' placeholder='# Telefono' className='caja-input-atencion-cliente ' required/>
          </div>
          <div className='cuadros-formulario'>
            <img src='person.png' alt=''className='imagen-formulario-atencioncliente' />
            <input className='caja-input-atencion-cliente' placeholder='Escriba aquí su petición o queja' required/>
          </div>
          <div className='contenedor-boton-atencion-cliente'>
            <button className='boton-enviar-peticion'>Enviar Mensaje</button>
          </div> 
        </form>
      </div>
    </section>
  )
}

export default ContenidoAtencionCliente
