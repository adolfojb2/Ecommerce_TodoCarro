import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import Home from './pages/Home';
import AtencionCliente from './pages/AtencionCliente';
import InicioRegistro from './pages/InicioRegistro';
import Dashboard from './pages/Dashboard';
import GenerarFacturas from './pages/GenerarFacturas';
import AñadirProductos from './pages/AñadirProductos';
import AnalyticsData from './pages/AnalyticsData';
import ProductosToyota from './pages/ProductosToyota';
import ProductosNissan from './pages/ProductosNissan';
import ProductosChevrolet from './pages/ProductosChevrolet';

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
        <Route path='/añadir_productos' element={<AñadirProductos />}></Route>
        <Route path='/analytics_ecommerce' element={<AnalyticsData />}></Route>
        <Route path='/productos_toyota' element={<ProductosToyota />}></Route>
        <Route path='/productos_nissan' element={<ProductosNissan />}></Route>
        <Route path='/productos_chevrolet' element={<ProductosChevrolet />}></Route>
      </Routes>
    </>
  )
}

export default App;