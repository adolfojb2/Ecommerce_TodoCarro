import React from 'react';
import '../styles/seccioncomentarios.css';
import { useState } from 'react';
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import personas from '../data';

function SeccionComentarios() {
  const[index, setIndex] = useState(0); // index = 0;
  const{nombre, vehiculo, imagen, descripcion} = personas[index]; // personas[0] => Me va a mostrar el primer usuario del arreglo que soy yo.

  const verificarNumero = (numero) => {
    if(numero > personas.length -1) {
      return 0;
    }
    if(numero < 0) {
      personas.length -1;
    }
    return numero;
  };

  const mostrarPersonaAdelante = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return verificarNumero(newIndex);
    })};

    const mostrarPersonaAtras = () => {
      setIndex((index) => {
        let newIndex = index - 1;
        return verificarNumero(newIndex);
      })};

  return (
    <section className='seccion-nuestros-comentarios'>
      <div className='titulo-y-guion'>
        <h1 className='titulo-nuestros-comentarios'>Nuestros comentarios</h1>
        <p className='linea-abajo'></p>
      </div>
      <div className='contenedor-nuestros-comentarios'>
        <div className='foto-usuario'>
          <img src={imagen} className='estilos-foto-usuario' alt={nombre}></img>
        </div>
        <h1 className='nombre-usuario'>{nombre}</h1>
        <div className='raya-nombre'></div>
        <h2 className='marca-carro-usuario'>{vehiculo}</h2>
        <span><RiDoubleQuotesL className='estilos-comillas-izq'/><RiDoubleQuotesR className='estilos-comillas-der'/></span>
        <p className='eb-garamond-descripcion-usuario'> {descripcion}</p>
        <div className='contenedor-iconos-derecha-izquierda'>
          <FaChevronLeft className='icono-izquierda-derecha' onClick={mostrarPersonaAtras}/>
          <FaChevronRight className='icono-izquierda-derecha' onClick={mostrarPersonaAdelante}/>
        </div>
      </div>
    </section>
  )
}

export default SeccionComentarios
