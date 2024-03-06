import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContenidoPaginaMarcaNissan from '../components/ContenidoPaginaMarcaNissan';
import SeccionProductosNissan from '../components/SeccionProductosNissan';

function ProductosToyota() {
  return (
    <>
      <Header />
      <ContenidoPaginaMarcaNissan />
      <SeccionProductosNissan />
      <Footer />
    </>
  )
}

export default ProductosToyota;