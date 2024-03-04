import React from 'react';
import '../styles/contenidoanalyticsdata.css';
import LinesChart from "../components/LinesChart";
import BarsChart from "../components/BarsChart";
import { IoHomeSharp } from "react-icons/io5";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaBoxesPacking } from "react-icons/fa6";
import { IoMdAnalytics } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function ContenidoAnalyticsData() {
  return (
    <main className='seccion-panel-lateral-tarjetas-seguimiento-de-compras-graficas'>
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
                <h1 className='titulo-panel-lateral-interior'><Link to='/dashboard' className='titulo-panel-lateral-interior'>Dashboard</Link></h1>
              </div>
              <div className='contenedor-panel-lateral-interior-y-icono'>
                <FaFileInvoiceDollar className='icono-parte-lateral-interior' />
                <h1 className='titulo-panel-lateral-interior'><Link to='/generar_facturas' className='titulo-panel-lateral-interior'>Generar facturas</Link></h1>
              </div>
              <div className='contenedor-panel-lateral-interior-y-icono'>
                <FaBoxesPacking className='icono-parte-lateral-interior' />
                <h1 className='titulo-panel-lateral-interior'><Link to='/añadir_productos' className='titulo-panel-lateral-interior'>Añadir Productos</Link></h1>
              </div>
              <div className='contenedor-panel-lateral-interior-y-icono'>
                <IoMdAnalytics className='icono-parte-lateral-interior' />
                <h1 className='titulo-panel-lateral-interior'><Link to='/analytics_ecommerce' className='titulo-panel-lateral-interior'>Analitica y datos</Link></h1>
              </div>
            </div>
            <div className='contenedor-parte-inferior-panel-lateral'>
              <p className='parrafo-parte-inferior-panel-lateral'>¿Le gustó nuestro Ecommerce?</p>
              <p className='parrafo-parte-inferior-panel-lateral-2'>Contactenos <span><FaArrowRight className='icono-flecha-verde-panel-interior-dashboard'/></span></p>
            </div> 
          </div>
        </section>
        
        {/* GENERAR GRAFICAS DE DASHBOARD */}
          <section className='seccion-generar-graficas-dashboard'>
            <div className='contenedor-todo-contenido-generar-graficas'>
              <h1 className='titulo-generar-graficas-dashboard'>Graficos e indicadores de ventas del Ecommerce</h1>
              <div className='contenedores-para-las-graficas'>
                <div className='graficas-individuales'>
                  <LinesChart />
                </div>
                <div className='graficas-individuales'>
                  <BarsChart />
                </div>
              </div>
            </div> 
          </section>
      </div>
    </main>
  )
}

export default ContenidoAnalyticsData;
