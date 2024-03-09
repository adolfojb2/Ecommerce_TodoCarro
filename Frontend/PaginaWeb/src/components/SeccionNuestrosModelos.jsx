import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/seccionnuestrosmodelos.css';

function SeccionNuestrosModelos() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='seccion-nuestros-modelos-carros'>
      <h1 className='titulo-seccion-nuestros-modelos-carros'>Nuestros modelos de Marcas.</h1>
      <Slider {...settings}>
          <div className='modelo-carro'>
            <h3 className='titulo-modelo-marca'>Toyota Hilux</h3>
            <img src='ToyotaHilux.png' className='foto-modelo-carro'/>
          </div>
          <div className='modelo-carro'>
            <h3 className='titulo-modelo-marca'>Toyota RAV4</h3>
            <img src='ToyotaRAV4.png' className='foto-modelo-carro'/>
          </div>
          <div className='modelo-carro'>
            <h3 className='titulo-modelo-marca'>Toyota 4Runner</h3>
            <img src='Toyota4Runner.png' className='foto-modelo-carro'/>
          </div>
          <div className='modelo-carro'>
            <h3 className='titulo-modelo-marca'>Nissan Sentra</h3>
            <img src='NissanSentra.png' className='foto-modelo-carro'/>
          </div>
          <div className='modelo-carro'>
            <h3 className='titulo-modelo-marca'>Nissan Frontier</h3>
            <img src='NissanFrontier.png' className='foto-modelo-carro'/>
          </div>
          <div className='modelo-carro'>
            <h3 className='titulo-modelo-marca'>Nissan Kicks</h3>
            <img src='NissanKicks.png' className='foto-modelo-carro'/>
          </div>
          <div className='modelo-carro'>
            <h3 className='titulo-modelo-marca'>Chevrolet Captiva</h3>
            <img src='ChevroletCaptiva.avif' className='foto-modelo-carro'/>
          </div>
          <div className='modelo-carro'>
            <h3 className='titulo-modelo-marca'>Chevrolet Tracker</h3>
            <img src='ChevroletTracker.png' className='foto-modelo-carro'/>
          </div>
          <div className='modelo-carro'>
            <h3 className='titulo-modelo-marca'>Chevrolet Tahoe</h3>
            <img src='ChevroletTahoe.png' className='foto-modelo-carro'/>
          </div>
          <div className='modelo-carro'>
            <h3 className='titulo-modelo-marca'>Mazda CX5</h3>
            <img src='MazdaCx-5-1.png' className='foto-modelo-carro'/>
          </div>
          <div className='modelo-carro'>
            <h3 className='titulo-modelo-marca'>Mazda 3</h3>
            <img src='Mazda6.png' className='foto-modelo-carro'/>
          </div>
          <div className='modelo-carro'>
            <h3 className='titulo-modelo-marca'>Mazda 6</h3>
            <img src='Mazda3.png' className='foto-modelo-carro'/>
          </div>
          <div className='modelo-carro'>
            <h3 className='titulo-modelo-marca'>Hyundai Tucson</h3>
            <img src='HyundaiTucson.png' className='foto-modelo-carro'/>
          </div>
          <div className='modelo-carro'>
            <h3 className='titulo-modelo-marca'>Hyundai Ix-35</h3>
            <img src='Hyundai-ix35.png' className='foto-modelo-carro'/>
          </div>
          <div className='modelo-carro'>
            <h3 className='titulo-modelo-marca'>Hyundai Creta</h3>
            <img src='HyundaiCreta.png' className='foto-modelo-carro'/>
          </div>
          <div className='modelo-carro'>
            <h3 className='titulo-modelo-marca'>Kia Sportage</h3>
            <img src='KiaSportage.png' className='foto-modelo-carro'/>
          </div>
          <div className='modelo-carro'>
            <h3 className='titulo-modelo-marca'>Kia Rio</h3>
            <img src='KiaRio.png' className='foto-modelo-carro'/>
          </div>
          <div className='modelo-carro'>
            <h3 className='titulo-modelo-marca'>Kia Picanto</h3>
            <img src='KiaPicanto.png' className='foto-modelo-carro'/>
          </div>
      </Slider>
    </div>
  );
}

export default SeccionNuestrosModelos;