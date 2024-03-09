import React from 'react';
import Footer from '../components/Footer';
import ContenidoPaginaMarcaToyota from '../components/ContenidoPaginaMarcaToyota';
import SeccionProductosToyota from '../components/SeccionProductosToyota';
import HeaderSticky from '../components/HeaderSticky';

function ProductosToyota() {
  return (
    <>
      <HeaderSticky />
      <ContenidoPaginaMarcaToyota />
      <SeccionProductosToyota />
      <Footer />
    </>
  )
}

export default ProductosToyota;