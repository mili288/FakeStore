import React from 'react'
import Iphone7 from '../images/iphone7.jpg';
import Iphone0 from '../images/iphone0.jpg';
import Iphone00 from '../images/iphone00.jpg';
import Product from './Product';

function Home() {
  return (
    <>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Iphone7} class="d-block w-100"  alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Iphone0} class="d-block w-100"  alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Iphone00} class="d-block w-100"  alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<Product />
    </>
  )
}

export default Home