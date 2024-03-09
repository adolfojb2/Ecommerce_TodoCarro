import React from 'react';
import '../styles/header.css';
import { IoCartSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import BarraBuscadoraProductos from './BarraBuscadoraProductos';
import Idiomas from './Idiomas';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function HeaderSticky() {
  return (
    <header className='posicion-sticky'>
        {/* Contenedor Header 1 */}
        <div className='contenedor-header-1'>
          <Link to='/'><img src='LogoEcommerce.jpg' className='estilos-logo' alt='logo'/></Link>
          <div className="contenedor-barra-buscadora">
            <BarraBuscadoraProductos />
          </div>
          <div className='botones-y-carrito'>
            <div className='contenedor-modo-claro-oscuro'>
              <FaSun className='icono-sol'/>
              <FaMoon className='icono-luna'/>
              <input type='checkbox' id='btn-switch' className='input-switch'/>
              <label for='btn-switch' className='lbl-switch'></label>
            </div>
            <Link to='/login' className='estilos-boton-login'><FaUserCircle className='logo-usuario'/>Login / Sign up</Link>
            <a href='#'><IoCartSharp className='estilo-icono-carrito'/></a>
            <Idiomas />
          </div>
        </div>
        {/* Contenedor Header 2 */}
        <div className='contenedor-header-2'>
          <nav className='contenedor-links'>
            <button className='estilos-boton-links'><Link to='/' className='estilos-boton-links'>Home</Link></button>
            <button className='estilos-boton-links'><Link to='/blog' className='estilos-boton-links'>Blog de repuestos</Link></button>
            <button className='estilos-boton-links'><Link to='/atencion_cliente' className='estilos-boton-links'>Atención al cliente</Link></button>
            <button className='estilos-boton-links'><Link to='/dashboard' className='estilos-boton-links'>Dashboard</Link></button>
          </nav>
        </div>
        <Outlet />
    </header>
  )
}

export default HeaderSticky;