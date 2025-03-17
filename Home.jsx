import React from 'react';
import Delhi from '../src/assets/Delhi.jpeg';
import Manipur from '../src/assets/Manipur.jpeg';
import Andhra from '../src/assets/Andhara Pradesh.jpeg';
import '../src/Home.css';

const Home = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide mx-auto"
      data-bs-ride="carousel"
      style={{ maxWidth: '100%', height: 'auto' }} // Makes the carousel responsive
    >
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner">
        {/* First Slide */}
        <div className="carousel-item active">
          <img
            src={Delhi}
            className="d-block w-100"
            alt="First Slide"
            style={{ objectFit: 'cover', height: 'auto', maxHeight: '500px' }} // Adjusting for responsiveness
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Delhi Air Pollution</h5>
            <p>Driving through Delhi's near-500 AQI, as I took off my face mask...</p>
          </div>
        </div>

        {/* Second Slide */}
        <div className="carousel-item">
          <img
            src={Manipur}
            className="d-block w-100"
            alt="Second Slide"
            style={{ objectFit: 'cover', height: 'auto', maxHeight: '500px' }} // Adjusting for responsiveness
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Manipur Violence</h5>
            <p>Manipur’s Who’s Who Must Forget Who Votes For Whom.</p>
          </div>
        </div>

        {/* Third Slide */}
        <div className="carousel-item">
          <img
            src={Andhra}
            className="d-block w-100"
            alt="Third Slide"
            style={{ objectFit: 'cover', height: 'auto', maxHeight: '500px' }} // Adjusting for responsiveness
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Andhra Pradesh Investments</h5>
            <p>Andhra Pradesh SIPB clears investment proposals worth ₹85,000 crore.</p>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Home;
