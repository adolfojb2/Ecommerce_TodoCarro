import React from 'react';
import '../styles/contenidopaginamarcamazda.css';

function ContenidoPaginaMarcaMazda() {
  return (
    <section className='seccion-general-pagina-marca-mazda'>
      <div className='contenido-seccion-pagina-marca-mazda'>
        <h1 className='titulo-todos-los-repuestos-mazda'>Todos los repuestos Mazda.</h1>
        <div className='contenedor-modelos-marcas-vehiculos-mazda'>
          <div className='contenedor-modelo-marca-mazda'>
            <h3 className='titulo-modelo-marca-vehiculo-mazda'>Mazda Cx-5</h3>
            <img src='MazdaCx-5-1.png' alt='' className='foto-modelo-marca-carro-mazda' />
          </div>
          <div className='contenedor-modelo-marca-mazda'>
            <h3 className='titulo-modelo-marca-vehiculo-mazda'>Mazda 3</h3>
            <img src='Mazda3.png' alt='' className='foto-modelo-marca-carro-mazda' />
          </div>
          <div className='contenedor-modelo-marca-mazda'>
            <h3 className='titulo-modelo-marca-vehiculo-mazda'>Mazda 6</h3>
            <img src='Mazda6.png' alt='' className='foto-modelo-marca-carro-mazda' />
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

export default ContenidoPaginaMarcaMazda;