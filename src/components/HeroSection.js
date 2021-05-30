import { Button } from "./Button";
import React from "react";
import "../App.css";
import "./HeroSection.css";
import sample from "../videos/vip.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src= "/videos/vip.mp4" autoPlay loop muted/>  */}
      <video className="videoTag" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>
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
          value="/trailer"
        >
          Watch Trailer <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
