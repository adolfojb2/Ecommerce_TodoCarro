import React from 'react';
import '../styles/contenidopaginamarcakia.css';

function ContenidoPaginaMarcaKia() {
  return (
    <section className='seccion-general-pagina-marca-kia'>
      <div className='contenido-seccion-pagina-marca-kia'>
        <h1 className='titulo-todos-los-repuestos-kia'>Todos los repuestos Kia Motors.</h1>
        <div className='contenedor-modelos-marcas-vehiculos-kia'>
          <div className='contenedor-modelo-marca-kia'>
            <h3 className='titulo-modelo-marca-vehiculo-kia'>Kia Sportage</h3>
            <img src='KiaSportage.png' alt='' className='foto-modelo-marca-carro-kia' />
          </div>
          <div className='contenedor-modelo-marca-kia'>
            <h3 className='titulo-modelo-marca-vehiculo-kia'>Kia Rio</h3>
            <img src='KiaRio.png' alt='' className='foto-modelo-marca-carro-kia' />
          </div>
          <div className='contenedor-modelo-marca-kia'>
            <h3 className='titulo-modelo-marca-vehiculo-kia'>Kia Picanto</h3>
            <img src='KiaPicanto.jpg' alt='' className='foto-modelo-marca-carro-kia' />
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

export default ContenidoPaginaMarcaKia;