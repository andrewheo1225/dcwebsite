import React from "react";
import "../../App.css";
import "./Trailer.css";
import Footer from "../Footer"
import ResponsiveEmbed from "react-responsive-embed";

function Trailer() {
  return (
    <>
      <ResponsiveEmbed
        className="trailer"
        src="https://www.youtube.com/embed/9nQQb8F7NGU"
        allowFullScreen
      />
        <Footer/>
    </>
  );
}
export default Trailer;
