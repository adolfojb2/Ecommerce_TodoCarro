import React from 'react';
import '../styles/idiomas.css';

function Idiomas() {
  return (
      <div className="lang-menu">
        <div className="selected-lang">
          <span className='titulo-español'>Español</span>
        </div>
        <ul>
          <li>
              <a href="#" className="de">English</a>
          </li>
          <li>
            <a href="#" className="en">Portugués</a>
          </li>
          <li>
            <a href="#" className="fr">French</a>
          </li>
        </ul>
      </div>
  )
}

export default Idiomas
