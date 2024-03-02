import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import Home from './pages/Home';
import AtencionCliente from './pages/AtencionCliente';
import InicioRegistro from './pages/InicioRegistro';
import Dashboard from './pages/Dashboard';
import GenerarFacturas from './pages/GenerarFacturas';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<InicioRegistro />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/atencion_cliente' element={<AtencionCliente />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/generar_facturas' element={<GenerarFacturas />}></Route>
      </Routes>
    </>
  )
}

export default App;