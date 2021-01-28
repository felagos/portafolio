import React from 'react';
import Link from 'next/link';

const Page404 = () => {
  return (
    <div className="parallax-content baner-content" id="home">
      <div className="container">
        <div className="first-content">
          <h1>404</h1>
          <h3 className="error-subtitle">Página no encontrada</h3>
          <div className="primary-button">
            <Link href="/">
              <a>Volver al inicio</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
