import React from 'react';
import '../styles/contenidodashboard.css';
import { IoHomeSharp } from "react-icons/io5";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaBoxesPacking } from "react-icons/fa6";
import { IoMdAnalytics } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

function PanelLateral() {
  return (
    <section className='seccion-panel-lateral'>
      <div className='todo-contenido-panel-lateral'>
        <div className='primera-seccion-panel-lateral'>
          <div className='contenedor-logo-panel-lateral'>
            <img src='LogoEcommerce Dashboard.jpg' alt='logo' className='estilo-logo-panel-lateral' />
            <h1 className='titulo-panel-lateral-logo'>Ecommerce TodoCarros</h1>
          </div>
        </div>
        <div className='raya-panel-lateral'></div>
        <div className='panel-lateral-interior-titulos'>
          <div className='contenedor-panel-lateral-interior-y-icono'>
            <IoHomeSharp className='icono-parte-lateral-interior' />
            <h1 className='titulo-panel-lateral-interior'>Dashboard</h1>
          </div>
          <div className='contenedor-panel-lateral-interior-y-icono'>
            <FaFileInvoiceDollar className='icono-parte-lateral-interior' />
            <h1 className='titulo-panel-lateral-interior'>Generar facturas</h1>
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
          <p className='parrafo-parte-inferior-panel-lateral'>¿Le gustó la Dashoboard?</p>
          <p className='parrafo-parte-inferior-panel-lateral'>Contactenos <span className='parrafo-parte-inferior-panel-lateral-2'><FaArrowRight /></span></p>
        </div> 
      </div>
    </section>
  )
}

export default PanelLateral;
