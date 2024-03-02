import React, { useState } from 'react';
import '../stylespages/loginsignup.css';

function ContenidoLogin() {

  const[accion, setAccion] = useState("Registrese"); //accion = "Registrese";

  return (
    <main className='pagina-completa'>
      <section className='contenedor-principal-login'>
        <div className="titulo-y-subrayado">
          <div className='titulo-formulario'>{accion}</div>
          <div className='subrayar'></div>
        </div>
        <form action="" method="">
          <div className='entrada-datos-usuarios-nuevos'>
            {/* Cuando doy click en Ingresar, me debe ocultar todo menos usuario y contraseña */}
            {accion==='Ingrese' ? <div className='ocultar'></div>:<div className='entrada'>
              <img src='person.png' alt=''/>
              <input type='text' placeholder='Nombre' required/>
            </div>}
            {accion==='Ingrese' ? <div className='ocultar'></div>:<div className='entrada'>
              <img src='person.png' alt=''/>
              <input type='text' placeholder='Apellido' required/>
            </div>}
            {accion==='Ingrese' ? <div className='ocultar'></div>:<div className='entrada'>
              <img src='person.png' alt=''/>
              <input type='text' placeholder='Crea tu usuario' required/>
            </div>}
            {accion==='Ingrese' ? <div className='ocultar'></div>:<div className='entrada'>
              <img src='person.png' alt=''/>
              <input type='text' placeholder='# Telefono' required/>
            </div>}
            <div className='entrada'>
              <img src='email.png' alt=''/>
              <input type='email' placeholder='Correo electrónico' required/>
            </div>
            <div className='entrada'>
              <img src='password.png' alt=''/>
              <input type='password' placeholder='Contraseña' required/>
            </div>
          </div>
          {accion==='Registrese' ? <div></div>:<div className='olvido-contraseña'>¿Olvidó su contraseña? <span>Haga click aquí</span></div>}
          <div className='contenedor-enviar'>
            <div className={accion==='Ingrese' ? 'enviar boton-seleccionado':'enviar'} onClick={function() {
              setAccion("Registrese")
              }}>
              Registrese
            </div>
            <div className={accion==='Registrese' ? 'enviar boton-seleccionado':'enviar'} onClick={function() {
              setAccion("Ingrese")
              }}>
              Ingrese
            </div>
          </div>
        </form>
      </section>
    </main>
  )
}

export default ContenidoLogin;