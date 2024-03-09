import React from 'react';
import Slider from '../components/Slider';
import TarjetasMarcasVehiculos from '../components/TarjetasMarcasVehiculos';
import SeccionProductos from '../components/SeccionProductos';
import FormasEnvio from '../components/FormasEnvio';
import PagaDesdeCasa from '../components/PagaDesdeCasa';
import SeccionComentarios from '../components/SeccionComentarios';
import Footer from '../components/Footer';
import HeaderSticky from '../components/HeaderSticky';
import SeccionNuestrosModelos from '../components/SeccionNuestrosModelos';

function Home() {
  return (
    <>
        <HeaderSticky />
        <Slider />
        <TarjetasMarcasVehiculos />
        <SeccionNuestrosModelos />
        <SeccionProductos />
        <FormasEnvio />
        <PagaDesdeCasa />
        <SeccionComentarios />
        <Footer />      
    </>
  )
}

export default Home;