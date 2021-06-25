import React from 'react';
import { Networking } from './Networking';

export const Intro = () => {
  return (
    <div className="parallax-content baner-content" id="home">
      <div className="container">
        <div className="first-content">
          <h1>Felipe Lagos</h1>
          <div className="info-contact">
            <span className="item">
              <h1 className="intro-header">Desarrollador Fullstack</h1>
            </span>
            <span className="item">
              <p>Correo: felagossanchez@gmail.com</p>
            </span>
          </div>
          <Networking />
          <div className="mt-3">
            <a href="#about" className="btn btn-orange btn-lg">
              Ver más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
