import React from 'react';
import '../styles/contenidoañadirproductos.css';
import { IoHomeSharp } from "react-icons/io5";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaBoxesPacking } from "react-icons/fa6";
import { IoMdAnalytics } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function ContenidoAñadirProductos() {
  return (
    <main className='seccion-completa-añadir-productos-para-la-dahsboard'>
      <div className='todo-contenido-dashboard-añadir-productos'>

        <section className='seccion-panel-lateral-añprd'>
          <div className='todo-contenido-panel-lateral-añprd'>
            <div className='primera-seccion-panel-lateral-añprd'>
              <div className='contenedor-logo-panel-lateral-añprd'>
                <img src='LogoEcommerce Dashboard.jpg' alt='logo' className='estilo-logo-panel-lateral-añprd' />
                <h1 className='titulo-panel-lateral-logo-añprd'>Ecommerce TodoCarros</h1>
              </div>
            </div>
            <div className='raya-panel-lateral-añprd'></div>
            <div className='contenedor-parte-2-dashboard-añprd'>
              <div className='panel-lateral-interior-titulos-añprd'>
                <div className='contenedor-panel-lateral-interior-y-icono-añprd'>
                  <IoHomeSharp className='icono-parte-lateral-interior-añprd' />
                  <h1 className='titulo-panel-lateral-interior-añprd'><Link to='/dashboard' className='titulo-panel-lateral-interior'>Dashboard</Link></h1>
                </div>
                <div className='contenedor-panel-lateral-interior-y-icono-añprd'>
                  <FaFileInvoiceDollar className='icono-parte-lateral-interior-añprd' />
                  <h1 className='titulo-panel-lateral-interior-añprd'><Link to='/generar_facturas' className='titulo-panel-lateral-interior'>Generar Facturas</Link></h1>
                </div>
                <div className='contenedor-panel-lateral-interior-y-icono-añprd'>
                  <FaBoxesPacking className='icono-parte-lateral-interior-añprd' />
                  <h1 className='titulo-panel-lateral-interior-añprd'><Link to='/añadir_productos' className='titulo-panel-lateral-interior'>Añadir Productos</Link></h1>
                </div>
                <div className='contenedor-panel-lateral-interior-y-icono-añprd'>
                  <IoMdAnalytics className='icono-parte-lateral-interior-añprd' />
                  <h1 className='titulo-panel-lateral-interior-añprd'><Link to='/analytics_ecommerce' className='titulo-panel-lateral-interior'>Analitica y datos</Link></h1>
                </div>
              </div>
              <div className='contenedor-parte-inferior-panel-lateral-añprd'>
                <p className='parrafo-parte-inferior-panel-lateral-añprd'>¿Le gustó la Dashoboard?</p>
                <p className='parrafo-parte-inferior-panel-lateral-añprd'>Contactenos <span className='parrafo-parte-inferior-panel-lateral-2'><FaArrowRight className='icono-flecha-verde-panel-interior-dashboard-añprd' /></span></p>
              </div> 
              </div>
            </div>
        </section>

        <section className='seccion-atencion-cliente'>
          <div className='contenedor-añadir-productos'>
            <form action="" method="" enctype="multipart/form-data" className='contenedor-formulario'>
              <h1 className='titulo-seccion-atencion-cliente'>Añada sus productos como administrador</h1>
              <div className='cuadros-formulario'>
                <img src='person.png' alt='' className='imagen-formulario-atencioncliente' />
                <input type='text' placeholder='Nombre del repuesto' className='caja-input-atencion-cliente' required/>
              </div>
              <div className='cuadros-formulario'>
                <img src='person.png' alt='' className='imagen-formulario-atencioncliente' />
                <label for = "Autos" className='titulo-marca-auto-favorito'>Marca de su Auto: </label><br/>
                  <select id = "Autos" name = "autos" className='titulo-marca-auto-favorito'>
                    <option value = "Toyota">Toyota</option>
                    <option value = "Chevrolet">Chevrolet</option>
                    <option value = "Kia">Kia</option>
                    <option value = "Hyundai">Hyundai</option>
                    <option value = "Nissan">Nissan</option>
                    <option value = "Mazda">Mazda</option>
                  </select><br/>
              </div>
              <div className='cuadros-formulario'>
                <img src='person.png' alt='' className='imagen-formulario-atencioncliente' />
                <label for = "Categorias" className='titulo-marca-auto-favorito'>Categorias: </label><br/>
                  <select id = "Categorias" name = "categorias" className='titulo-marca-auto-favorito'>
                    <option value = "Direccion">Dirección</option>
                    <option value = "Transmision">Transmisión</option>
                    <option value = "Suspension">Suspensión</option>
                    <option value = "Frenos">Frenos</option>
                    <option value = "Electrica">Electrica</option>
                    <option value = "Refrigeracion">Refrigeración</option>
                    <option value = "Lubricacion">Lubricación</option>
                  </select>
              </div>
              <div className='cuadros-formulario'>
                <img src='person.png' alt='' className='imagen-formulario-atencioncliente' />
                <input type='text' placeholder='Ingrese el valor del repuesto' className='caja-input-atencion-cliente ' required/>
              </div>
              <div className='cuadros-formulario'>
                <img src='person.png' alt=''className='imagen-formulario-atencioncliente' />
                <input className='caja-input-atencion-cliente' placeholder='Escriba aquí la descripción del producto' required/>
              </div>
              <div className='contenedor-imagen-cargada-producto'>
                <label for="imagen-a-cargar-repuesto"><strong className='titulo-imagen-cargada'>Cargue la imagen del repuesto: </strong></label><br/>
                <input type='file' name='imagen-a-cargar-repuesto' id='imagen-a-cargar-repuesto' className='input-cargar-fotoproducto'/>
              </div>
              <div className='contenedor-boton-atencion-cliente'>
                <button className='boton-enviar-peticion'>Enviar Mensaje</button>
              </div> 
            </form>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ContenidoAñadirProductos;
