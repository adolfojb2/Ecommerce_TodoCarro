import React from 'react';
import '../styles/contenidopaginamarcatoyota.css';

function ContenidoPaginaMarcaToyota() {
  return (
    <section className='seccion-general-pagina-marca'>
      <div className='contenido-seccion-pagina-marca'>
        <h1 className='titulo-todos-los-repuestos'>Todos los repuestos Toyota.</h1>
        <div className='contenedor-modelos-marcas-vehiculos'>
          <div className='contenedor-modelo-marca'>
            <h3 className='titulo-modelo-marca-vehiculo'>Toyota Hilux</h3>
            <img src='ToyotaHilux.png' alt='' className='foto-modelo-marca-carro' />
          </div>
          <div className='contenedor-modelo-marca'>
            <h3 className='titulo-modelo-marca-vehiculo'>Toyota RAV4</h3>
            <img src='ToyotaRAV4.png' alt='' className='foto-modelo-marca-carro' />
          </div>
          <div className='contenedor-modelo-marca'>
            <h3 className='titulo-modelo-marca-vehiculo'>Toyota 4Runner</h3>
            <img src='Toyota4Runner.png' alt='' className='foto-modelo-marca-carro' />
          </div>
        </div>
        <div className='contenedor-botones-filtros-carros'>
          <button className='estilos-boton-filtros-carros-1'>Dirección</button>
          <button className='estilos-boton-filtros-carros-2'>Suspension</button>
          <button className='estilos-boton-filtros-carros-3'>Transmisión</button>
          <button className='estilos-boton-filtros-carros-5'>Frenos</button>
          <button className='estilos-boton-filtros-carros-6'>Electrica</button>
          <button className='estilos-boton-filtros-carros-7'>Refrigeración</button>
          <button className='estilos-boton-filtros-carros-8'>Lubricación</button>
        </div>
      </div>
    </section>
  )
}

export default ContenidoPaginaMarcaToyota;
