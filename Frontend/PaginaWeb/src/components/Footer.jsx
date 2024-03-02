import React from 'react';
import '../styles/footer.css';
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { GiLaptop } from "react-icons/gi";
import { ImMobile2 } from "react-icons/im";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";

function Footer() {
  return (
    <section className='seccion-footer'>
      <div className='contenedor-foto-logo-footer'>
        <a href='#'><img src='Logofooter-removebg-preview.png' className='logo-footer'/></a>
      </div>
      <div className='contenedor-links-footer'>
        <a href='#' className='link-footer'>Home</a>
        <a href='#' className='link-footer'>Blog</a>
        <a href='#' className='link-footer'>Atencion al cliente</a>
      </div>
      <div className='contenedor-redes-sociales'>
        <a href='#'><FaWhatsapp className='estilos-logo-redes-sociales'/></a>
        <a href='#'><FaFacebook className='estilos-logo-redes-sociales-2'/></a>
        <a href='#'><FaXTwitter className='estilos-logo-redes-sociales-3'/></a>
        <a href='#'><FaGithub className='estilos-logo-redes-sociales-4'/></a>
      </div>
      <div className='raya-debajo-footer'></div>
      <h1 className='titulo-tecnologias-usadas'>Tecnologías usadas: </h1>
      <div className='contenedor-dos-iconos'>
        <GiLaptop className='estilos-pc'/>
        <ImMobile2 className='estilos-movil'/>
      </div>
      <div className="iconos-tecnologias">
        <FaHtml5 className='estilo-icono-tecnologia-html'/>
        <FaCss3Alt className='estilo-icono-tecnologia-css'/>
        <RiJavascriptFill className='estilo-icono-tecnologia-javascript'/>
        <FaReact className='estilo-icono-tecnologia-react'/>
        <SiTailwindcss className='estilo-icono-tecnologia-tailwind'/>
        <FaPython className='estilo-icono-tecnologia-python'/>
        <SiDjango className='estilo-icono-tecnologia-django'/>
        <DiMysql className='estilo-icono-tecnologia-mysql'/>
        <FaAws className='estilo-icono-tecnologia-aws'/>
        <FaDocker className='estilo-icono-tecnologia-docker'/>
      </div>
      <h2 className='derechos-reservados'>All rigths reserved</h2>
      <h3 className='derechos-reservados'>2024</h3>   
    </section>
  )
}

export default Footer;