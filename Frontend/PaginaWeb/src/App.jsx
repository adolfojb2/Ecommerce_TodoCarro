import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LoginSignup from './pages/LoginSignup';
import Slider from './components/Slider';
import TarjetasMarcasVehiculos from './components/TarjetasMarcasVehiculos';
import SeccionProductos from './components/SeccionProductos';
import FormasEnvio from './components/FormasEnvio';
import PagaDesdeCasa from './components/PagaDesdeCasa';
import SeccionComentarios from './components/SeccionComentarios';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Header />}></Route>
        <Route path='/login-sign' element={<LoginSignup />}></Route>
      </Routes>
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

export default App