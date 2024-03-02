import React from 'react';
import { FaDollarSign } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaBoxesPacking } from "react-icons/fa6";
import { IoMdAnalytics } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import '../styles/contenidogenerarfacturas.css';

function ContenidoGenerarFacturas() {
  return (
    <main className='seccion-panel-lateral-tarjetas-seguimiento-de-compras'>
      <div className='todo-el-contenido-de-la-dashboard'>
        
        {/* PANEL LATERAL */}
        <section className='todo-contenido-panel-lateral'>
          <div className='primera-seccion-panel-lateral'>
            <div className='contenedor-logo-panel-lateral'>
              <img src='LogoEcommerce Dashboard.jpg' alt='logo' className='estilo-logo-panel-lateral' />
              <h1 className='titulo-panel-lateral-logo'>Ecommerce TodoCarros</h1>
            </div>
          </div>
          <div className='raya-panel-lateral'></div>
          <div className='contenedor-parte-2-dashboard'>
            <div className='panel-lateral-interior-titulos'>
              <div className='contenedor-panel-lateral-interior-y-icono'>
                <IoHomeSharp className='icono-parte-lateral-interior' />
                <h1 className='titulo-panel-lateral-interior'>Dashboard</h1>
              </div>
              <div className='contenedor-panel-lateral-interior-y-icono'>
                <FaFileInvoiceDollar className='icono-parte-lateral-interior' />
                <h1 className='titulo-panel-lateral-interior'><Link to='/generar_facturas'>Generar facturas</Link></h1>
              </div>
              <div className='contenedor-panel-lateral-interior-y-icono'>
                <FaBoxesPacking className='icono-parte-lateral-interior' />
                <h1 className='titulo-panel-lateral-interior'>Añadir productos</h1>
              </div>
              <div className='contenedor-panel-lateral-interior-y-icono'>
                <IoMdAnalytics className='icono-parte-lateral-interior' />
                <h1 className='titulo-panel-lateral-interior'>Analítica y datos</h1>
              </div>
            </div>
            <div className='contenedor-parte-inferior-panel-lateral'>
              <p className='parrafo-parte-inferior-panel-lateral'>¿Le gustó nuestro Ecommerce?</p>
              <p className='parrafo-parte-inferior-panel-lateral-2'>Contactenos <span><FaArrowRight className='icono-flecha-verde-panel-interior-dashboard'/></span></p>
            </div> 
          </div>
        </section>

        {/* TARJETAS DE INGRESO POR FECHAS */}
        <section className='todo-contenido-tarjetas-ingreso-dashboard'>
          <div className='contenedor-interno-contenido-tarjetas-ingreso-dashboard'>
            <h1 className='titulo-para-dashboard-inicio'>Dashboard Ecommerce TodoCarros.</h1>
            <h2 className='descripcion-para-dashboard'>Bienvenidos a la Dashboard del Ecommerce de TodoCarros.</h2>
            <div className='contenedor-tres-tarjetas-ingreso-dashboard'>
              <div className='contenedor-tarjeta-general-ingreso-dashboard'>
                <h3 className='titulo-ingresos-tarjeta'>Ingresos por día</h3>
                <div className='contenedor-precio-ingreso-dashboard'>
                  <FaDollarSign className='estilos-signo-peso-dashboard-1'/>
                  <h1 className='valor-ingreso-dashboard'> 1.000.000 <FaDollarSign className='estilos-signo-peso-dashboard-2' /></h1>
                </div>
                <h3 className='descripcion-año-dashboard'>Año 2020</h3>
                <div className='contenedor-olas-tarjeta'>
                  <img src='wave.png' alt='wave' className='estilos-onda-tarjeta-ingresos' />
                </div>
              </div>
              <div className='contenedor-tarjeta-general-ingreso-dashboard-2'>
                <h3 className='titulo-ingresos-tarjeta'>Ingresos por mes</h3>
                <div className='contenedor-precio-ingreso-dashboard'>
                  <FaDollarSign className='estilos-signo-peso-dashboard-1'/>
                  <h1 className='valor-ingreso-dashboard'> 20.000.000 <FaDollarSign className='estilos-signo-peso-dashboard-2' /></h1>
                </div>
                <h3 className='descripcion-año-dashboard'>Año 2020</h3>
                <div className='contenedor-olas-tarjeta'>
                  <img src='wave.png' alt='wave' className='estilos-onda-tarjeta-ingresos' />
                </div>
              </div>
              <div className='contenedor-tarjeta-general-ingreso-dashboard-3'>
                <h3 className='titulo-ingresos-tarjeta'>Ingresos por año</h3>
                <div className='contenedor-precio-ingreso-dashboard'>
                  <FaDollarSign className='estilos-signo-peso-dashboard-1'/>
                  <h1 className='valor-ingreso-dashboard'> 350.000.000 <FaDollarSign className='estilos-signo-peso-dashboard-2' /></h1>
                </div>
                <h3 className='descripcion-año-dashboard'>Año 2020</h3>
                <div className='contenedor-olas-tarjeta'>
                  <img src='wave.png' alt='wave' className='estilos-onda-tarjeta-ingresos' />
                </div>
              </div>
            </div>
          </div>
          {/* SEGUIMIENTO DE VENTAS DE LOS USUARIOS */}
          <section className='seccion-generar-facturas-pdf'>
            <div className='contenedor-todo-contenido-generar-pdf'>
              <div className='titulo-generar-facturas-pdf'>
                Facturas de ventas emitidas.
              </div>
              <div className='contenedor-columnas-datos-facturas'>
                <h3 className='titulo-datos-facturas'>N°-Factura</h3>
                <h3 className='titulo-datos-facturas'>Cliente</h3>  
                <h3 className='titulo-datos-facturas'>Fecha</h3>  
                <h3 className='titulo-datos-facturas'>Valor de factura</h3>  
              </div>
              <div className='contenedor-descripcion-columnas-datos-facturas'>
                <button className='boton-factura'><FaFilePdf />7/2020</button>
                <h3 className='nombre-cliente-factura'>Adolfo Betin</h3>
                <h3 className='fecha-cliente-factura'>3/1/2020</h3>
                <h3 className='dato-valor-factura'>150.000 <FaDollarSign className='estilos-signo-peso-dashboard-2' /></h3>
              </div>  
            </div> 
          </section>
        </section>
      </div>
    </main>
  )
}

export default ContenidoGenerarFacturas;