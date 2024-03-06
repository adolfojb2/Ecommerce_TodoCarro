import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContenidoPaginaMarcaToyota from '../components/ContenidoPaginaMarcaToyota';
import SeccionProductosToyota from '../components/SeccionProductosToyota';

function ProductosToyota() {
  return (
    <>
      <Header />
      <ContenidoPaginaMarcaToyota />
      <SeccionProductosToyota />
      <Footer />
    </>
  )
}

export default ProductosToyota;