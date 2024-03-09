import React from 'react';
import '../styles/contenidopaginamarcahyundai.css';

function ContenidoPaginaMarcaHyundai() {
  return (
    <section className='seccion-general-pagina-marca-hyundai'>
      <div className='contenido-seccion-pagina-marca-hyundai'>
        <h1 className='titulo-todos-los-repuestos-hyundai'>Todos los repuestos Hyundai.</h1>
        <div className='contenedor-modelos-marcas-vehiculos-hyundai'>
          <div className='contenedor-modelo-marca-hyundai'>
            <h3 className='titulo-modelo-marca-vehiculo-hyundai'>Hyundai Tucson</h3>
            <img src='HyundaiTucson.png' alt='' className='foto-modelo-marca-carro-hyundai' />
          </div>
          <div className='contenedor-modelo-marca-hyundai'>
            <h3 className='titulo-modelo-marca-vehiculo-hyundai'>Hyundai Ix-35</h3>
            <img src='Hyundai-ix35.png' alt='' className='foto-modelo-marca-carro-hyundai' />
          </div>
          <div className='contenedor-modelo-marca-hyundai'>
            <h3 className='titulo-modelo-marca-vehiculo-hyundai'>Hyundai Creta</h3>
            <img src='HyundaiCreta.png' alt='' className='foto-modelo-marca-carro-hyundai' />
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

export default ContenidoPaginaMarcaHyundai;