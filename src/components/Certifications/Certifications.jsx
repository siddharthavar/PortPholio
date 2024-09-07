import React from 'react'
import image1 from "../../Assets/Screenshot 2024-09-07 132624.png" ;
const Certifications = () => {
  return (
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
  <div className="carousel-item active">
  <img src={image1} style={{ width: 800, height: 600, objectFit: 'cover' }} className="d-block w-100" alt="..."/>
</div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Certifications
