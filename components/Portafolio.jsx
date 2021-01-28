import React from 'react';
import Image from 'next/image';

export const Portafolio = () => {
  return (
    <div
      className="parallax-content projects-content carousel carousel-dark slide"
      id="portfolio"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="title-section text-center">
              Portafolio <hr />
            </h2>
            <div className="grid-portafolio">
              <div className="card">
                <Image
                  src="/img/thumbails/thumbs-01.jpg"
                  width={480}
                  height={360}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Petgram</h5>
                  <a
                    href="https://petgram.felipelagos.dev"
                    target="_blank"
                    className="btn btn-orange btn-large"
                  >
                    Visitar
                  </a>
                </div>
              </div>

              <div className="card">
                <Image
                  src="/img/thumbails/thumbs-02.jpg"
                  width={480}
                  height={360}
                />
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
      </div>
    </div>
  );
};
