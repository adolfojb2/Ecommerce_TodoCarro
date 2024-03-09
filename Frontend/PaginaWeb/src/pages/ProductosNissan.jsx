import React from 'react';
import Footer from '../components/Footer';
import ContenidoPaginaMarcaNissan from '../components/ContenidoPaginaMarcaNissan';
import SeccionProductosNissan from '../components/SeccionProductosNissan';
import HeaderSticky from '../components/HeaderSticky';

function ProductosToyota() {
  return (
    <>
      <HeaderSticky />
      <ContenidoPaginaMarcaNissan />
      <SeccionProductosNissan />
      <Footer />
    </>
  )
}

export default ProductosToyota;