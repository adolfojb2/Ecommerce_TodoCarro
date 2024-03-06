import React from 'react';
import '../styles/contenidopaginamarcachevrolet.css';

function ContenidoPaginaMarcaChevrolet() {
  return (
    <section className='seccion-general-pagina-marca-chevrolet'>
      <div className='contenido-seccion-pagina-marca-chevrolet'>
        <h1 className='titulo-todos-los-repuestos-chevrolet'>Todos los repuestos Chevrolet.</h1>
        <div className='contenedor-modelos-marcas-vehiculos-chevrolet'>
          <div className='contenedor-modelo-marca-chevrolet'>
            <h3 className='titulo-modelo-marca-vehiculo-chevrolet'>Chevrolet Captiva</h3>
            <img src='ChevroletCaptiva.avif' alt='' className='foto-modelo-marca-carro-chevrolet' />
          </div>
          <div className='contenedor-modelo-marca-chevrolet'>
            <h3 className='titulo-modelo-marca-vehiculo-chevrolet'>Chevrolet Tracker</h3>
            <img src='ChevroletTracker.png' alt='' className='foto-modelo-marca-carro-chevrolet' />
          </div>
          <div className='contenedor-modelo-marca-chevrolet'>
            <h3 className='titulo-modelo-marca-vehiculo-chevrolet'>Chevrolet Tahoe</h3>
            <img src='ChevroletTahoe.png' alt='' className='foto-modelo-marca-carro-chevrolet-tahoe' />
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

export default ContenidoPaginaMarcaChevrolet;