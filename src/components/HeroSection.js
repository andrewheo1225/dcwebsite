import { Button } from './Button';
import React from "react";
import '../App.css';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>Professional Cleaning Professional Care</h1>
      <p>Free Delivery For Neighborhood Orders Over $20</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          value="/gallery"
        >
          Gallery
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          value = "/trailer"
        >
          Watch Trailer <i className='far fa-play-circle'/>
        </Button>

      </div>
    </div>
  );
}

export default HeroSection;
