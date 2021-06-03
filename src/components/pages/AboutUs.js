import React from "react";
import "../../App.css";
import Footer from "../Footer";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <>
      {/* <h1 className="about-us">About Us</h1> */}

      <div className="container">
       
        <main className = "main">Introduction</main>
        <div className="sidebar">Services</div>
        <div className="content1"></div>
        <div className="content2"></div>
        <div className="content3"></div>
       
      </div>

      <Footer />
    </>
  );
}
