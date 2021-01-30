import React from 'react';
import { Networking } from './Networking';

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <a href="#home" className="btn btn-orange mb-5">
              Vovler arriba
            </a>
            <Networking />
          </div>
        </div>
      </div>
    </footer>
  );
};
