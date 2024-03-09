import React from 'react';
import '../styles/contenidopaginamarcanissan.css';

function ContenidoPaginaMarcaNissan() {
  return (
    <section className='seccion-general-pagina-marca-nissan'>
      <div className='contenido-seccion-pagina-marca-nissan'>
        <h1 className='titulo-todos-los-repuestos-nissan'>Todos los repuestos Nissan.</h1>
        <div className='contenedor-modelos-marcas-vehiculos-nissan'>
          <div className='contenedor-modelo-marca-nissan'>
            <h3 className='titulo-modelo-marca-vehiculo-nissan'>Nissan Sentra</h3>
            <img src='NissanSentra.png' alt='' className='foto-modelo-marca-carro-nissan' />
          </div>
          <div className='contenedor-modelo-marca-nissan'>
            <h3 className='titulo-modelo-marca-vehiculo-nissan'>Nissan Frontier</h3>
            <img src='NissanFrontier.png' alt='' className='foto-modelo-marca-carro-nissan' />
          </div>
          <div className='contenedor-modelo-marca-nissan'>
            <h3 className='titulo-modelo-marca-vehiculo-nissan'>Nissan Kicks</h3>
            <img src='NissanKicks.png' alt='' className='foto-modelo-marca-carro-nissan' />
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

export default ContenidoPaginaMarcaNissan;