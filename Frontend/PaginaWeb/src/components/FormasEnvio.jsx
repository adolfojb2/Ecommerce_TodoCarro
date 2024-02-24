import React from 'react';
import '../styles/formasenvio.css';
import { MdDeliveryDining } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaBoxOpen } from "react-icons/fa";

function FormasEnvio() {
  return (
    <section className='seccion-formas-envio'>
      <h1 className='titulo-formas-envio'>Tenemos todas las formas de envio</h1>
      <div className='contenedor-contiene-3-formas-envio'> 
        <div className='contenedor-formas-envio-general'>
          <div className='contenedor-imagen-domicilio'>
            <MdDeliveryDining  className='logo-domicilio'/>
          </div>
          <h2 className='titulo-forma-envio-general'>Disponibilidad inmediata</h2>
          <p className='descripcion-forma-envio-general'>Todos nuestros productos, tienen disponibilidad inmediata en stock,
            con tiempos de entrega de 2 a 5 días.</p>
        </div>
        <div className='contenedor-formas-envio-general'>
          <div className='contenedor-imagen-domicilio'>
            <TbTruckDelivery  className='logo-domicilio-2'/>
          </div>
          <h2 className='titulo-forma-envio-general'>Envio gratis</h2>
          <p className='descripcion-forma-envio-general'>Por compras superiores a $100.000 recibe tu producto en la puerta de tu casa sin ningún valor adicional.</p>
        </div>
        <div className='contenedor-formas-envio-general'>
          <div className='contenedor-imagen-domicilio'>
            <FaBoxOpen  className='logo-domicilio-3'/>
          </div>
          <h2 className='titulo-forma-envio-general'>Pago contra entrega</h2>
          <p className='descripcion-forma-envio-general'>
            Puede pagar contra entrega,
            para confirmar pedido se paga solo el envío,
            en toda Colombia a través de nuestros
            convenios con varias transportadoras</p>
        </div>
      </div>
    </section>
  )
}

export default FormasEnvio
