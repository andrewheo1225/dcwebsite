import React from "react";
import "../../App.css";
import Footer from "../Footer";
import "./BusinessHours.css";

export default function BusinessHours() {
  return (
    <>
      <div className="bcontainer">
        <nav className = "bnav">Navbar</nav>
        <div className="bcontent1">Content1</div>
        <div className="bcontent2">Content2</div>
        <footer className = "bfooter">Footer</footer>
      </div>
      <Footer />
    </>
  );
}
