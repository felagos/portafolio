import React from 'react';

export const Navbar = () => {
  return (
    <div id="navbar-app" className="fixed-side-navbar">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link" href="#about">
            <span>Acerca de mí</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#experience">
            <span>Experiencia Laboral</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#portfolio">
            <span>Portfolio</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
