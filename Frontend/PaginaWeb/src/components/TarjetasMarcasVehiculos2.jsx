import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/tarjetasmarcasvehiculos.css';

function TarjetasMarcasVehiculos2() {
  return (
    <section className='seccion-nuestras-marcas-2'>
     <div className='titulo'>¡Seleccione su marca de vehículo!</div>
     <div className='contenedor-fotos'>
        <div className='contenedor-interior-fotos-1'>
          <div className='contenedor-contiene-foto'>
            <Link to='/productos_toyota'><img src='Logo de Toyota.png' className='logo-marca' alt='Logo de Toyota'></img></Link>
          </div>
          <div className='contenedor-contiene-foto'>
            <Link to='/productos_nissan'><img src='Logo de Nissan.png' className='logo-marca' alt='Logo de Nissan'></img></Link>
          </div>
          <div className='contenedor-contiene-foto'>
            <Link to='/productos_chevrolet'><img src='Logo de Chevrolet.png' className='logo-marca' alt='Logo de Chevrolet'></img></Link>
          </div>
        </div>
        <div className='contenedor-interior-fotos-2'>
          <div className='contenedor-contiene-foto'>
            <Link to='/productos_mazda'><img src='Logo de Mazda.png' className='logo-marca' alt='Logo de Mazda'></img></Link>
          </div>
          <div className='contenedor-contiene-foto'>
            <Link to='/productos_hyundai'><img src='Logo de Hyundai.png' className='logo-marca' alt='Logo de Mazda'></img></Link>
          </div>
          <div className='contenedor-contiene-foto'>
            <Link to='/productos_kia'><img src='Logo de Kia.png' className='logo-marca' alt='Logo de Mazda'></img></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TarjetasMarcasVehiculos2;
