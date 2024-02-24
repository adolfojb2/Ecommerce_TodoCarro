import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'

// Ese "root" es el id de un div del html.
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render (
  //Renderizo toda la aplicacion.
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
)
