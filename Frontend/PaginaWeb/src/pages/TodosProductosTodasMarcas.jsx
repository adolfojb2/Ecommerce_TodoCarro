import React from 'react';
import Footer from '../components/Footer';
import TarjetasMarcasVehiculos2 from '../components/TarjetasMarcasVehiculos2';
import SeccionProductosTodasMarcas from '../components/SeccionProductosTodasMarcas';
import HeaderSticky from '../components/HeaderSticky';

function ProductosToyota() {
  return (
    <>
      <HeaderSticky />
      <TarjetasMarcasVehiculos2 />
      <SeccionProductosTodasMarcas />
      <Footer />
    </>
  )
}

export default ProductosToyota;