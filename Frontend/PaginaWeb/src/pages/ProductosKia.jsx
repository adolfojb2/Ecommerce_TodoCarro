import React from 'react';
import Footer from '../components/Footer';
import ContenidoPaginaMarcaKia from '../components/ContenidoPaginaMarcaKia';
import SeccionProductosKia from '../components/SeccionProductosKia';
import HeaderSticky from '../components/HeaderSticky';

function ProductosKia() {
  return (
    <>
      <HeaderSticky />
      <ContenidoPaginaMarcaKia />
      <SeccionProductosKia />
      <Footer />
    </>
  )
}

export default ProductosKia;
