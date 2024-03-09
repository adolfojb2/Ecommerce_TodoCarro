import React from 'react';
import Footer from '../components/Footer';
import ContenidoPaginaMarcaMazda from '../components/ContenidoPaginaMarcaMazda';
import SeccionProductosMazda from '../components/SeccionProductosMazda';
import HeaderSticky from '../components/HeaderSticky';

function ProductosMazda() {
  return (
    <>
      <HeaderSticky />
      <ContenidoPaginaMarcaMazda />
      <SeccionProductosMazda />
      <Footer />
    </>
  )
}

export default ProductosMazda;