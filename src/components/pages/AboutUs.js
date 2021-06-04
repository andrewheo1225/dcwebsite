import React from "react";
import "../../App.css";
import Footer from "../Footer";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <>
      {/* <h1 className="about-us">About Us</h1> */}

      <div className="container">
       
   
        <main className="main">
          <div className="blockquote">
            Welcome to VIP Cleaners! My name is Jessica Lee, and I started this
            company 30 years ago. This local dry cleaner is more than suitable
            for your every need, from household draperies to wedding gowns. My
            company and I offer 30 years of tailoring/alteration services to
            anyone looking to make changes of any scale. My prices are
            reasonable since the start, and I extend my knowledge to anyone
            confused about their clothing necessity. Please drop by even if you
            wish to ask questions. Thank you, and we can all get through these
            challenging times together!
            <h1 className="span">-Jessica Lee</h1>
          </div>
        </main>

        <div className="sidebar">
          <h1>Our Services</h1>
          <ul className = "list">
            <li>Alteration</li>
            <li>Professional Tailoring</li>
            <li>Same Day Service(In By 10 A.M. Out By 5 P.M.)</li>
            <li>Fur Coats </li>
            <li>Wedding Gown</li>
            <li>Household Items</li>
            <li>Leather</li>
            <li>Suede</li>
            <li>Shirt Laundry</li>
            <li>Uggs</li>
            <li>Draperies</li>
            <li>Rugs</li>   
            <li>Linens</li>            
          </ul>
        </div>
        <div className="content1"></div>
        <div className="content2"></div>
        <div className="content3"></div>
       
      </div>

      <Footer />
    </>
  );
}
