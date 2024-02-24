import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

function App() {
  const imagenes = [
    {
      original: "Airbag Toyota.jpg"
    },
    {
      original: "Repuesto Toyota 2.jpg"
    },
    {
      original: "Repuesto Toyota.jpg"
    },
    {
      original: "Repuestos ford.jpg"
    },
    {
      original: "Repuestos generales 2.jpg"
    },
    {
      original: "Piezas de carros.png"
    },
  ];

  return (
    <div style={{height: "30vw", background: "#01060D"}}>
      <ImageGallery items={imagenes}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showBullets={true}
        autoPlay={true}
        slideInterval={5000}
      />
    </div>
  )
}

export default App