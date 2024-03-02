import React from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import TarjetasMarcasVehiculos from '../components/TarjetasMarcasVehiculos';
import SeccionProductos from '../components/SeccionProductos';
import FormasEnvio from '../components/FormasEnvio';
import PagaDesdeCasa from '../components/PagaDesdeCasa';
import SeccionComentarios from '../components/SeccionComentarios';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
        <Header />
        <Slider />
        <TarjetasMarcasVehiculos />
        <SeccionProductos />
        <FormasEnvio />
        <PagaDesdeCasa />
        <SeccionComentarios />
        <Footer />      
    </>
  )
}

export default Home;