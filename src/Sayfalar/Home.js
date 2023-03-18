import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import resim from "../Image/e.jpg"
import khas from "../Image/khas.jpg"
import helsinki from "../Image/helsinki.jpg"
import TrinityCollage from "../Image/TrinityCollage.jpg"


import { Carousel } from 'react-bootstrap';

const Home = () => {
  return (
    <div style={{ backgroundColor: "#f8f4ff" }}>
      <div className='row mt-2'>
        <div class="col-12">
          <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={resim} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={resim} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={resim} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>

          </div>
        </div>
      </div>

      <div className="row  mt-3 mb-5 pb-3 pt-2" >
        <div className="col-4 d-flex justify-content-center">
          <div class="card" style={{ width: " 18rem" }}>
            <img src={helsinki} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Helsinki Metropolia University of Applied Sciences (Finlandiya)</p>
              <a href="https://aday.khas.edu.tr/yurtdisi-imkanlar" class="btn btn-primary">Daha Fazla Bilgi</a>
            </div>
          </div>
        </div>
        <div className="col-4 d-flex justify-content-center ">
          <div class="card" style={{ width: " 18rem" }}>
            <img src={TrinityCollage} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Trinity College Dublin (İrlanda)</p>
              <a href="https://aday.khas.edu.tr/yurtdisi-imkanlar" class="btn btn-primary">Daha Fazla Bilgi</a>
          
            </div>
          </div>
          
      
        </div>
        <div className="col-4 d-flex justify-content-center">
          <div class="card" style={{ width: " 18rem" }}>
            <img src={helsinki} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Helsinki Metropolia University of Applied Sciences (Finlandiya)</p>
              <a href="https://aday.khas.edu.tr/yurtdisi-imkanlar" class="btn btn-primary">Daha Fazla Bilgi</a>
            </div>
          </div>
        </div>
  
      </div>


    </div>
  );
};

export default Home;


