import React from 'react';

export const Portafolio = () => {
  return (
    <div className="parallax-content portafolio-content" id="portfolio">
      <div className="section-wrapper mx-auto">
        <h2 className="title-section text-center">
          Portafolio <hr />
        </h2>
        <div className="grid-portafolio">
          <div className="card">
            <img src="/img/thumbails/thumbs-02.jpg" />
            <div className="card-body">
              <h5 className="card-title text-center">Moviedb</h5>
              <a
                href="https://moviedb.felipelagos.dev"
                target="_blank"
                className="btn btn-orange btn-large"
              >
                Visitar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
