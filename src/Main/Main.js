
import React, { useState, useEffect, Component } from "react";
import "./../App.css";
import image1 from './../Images/image1.png';
import "./Main.css";

function Main() {
  return (
    <div >
      
      <img src={image1} alt = "VIPDRYCLEANERS" className = "image1"/>

    </div>
  );
}
export default Main;

/*
import React, { useState, useEffect, Component } from "react";

import image1 from './../Images/image1.png';
import "./Main.css";

class Main extends React.Component{
  constructor(props){
    super(props);
  }
  
  

  render(){
    return (
      <div >
      
      <img src={image1} alt = "VIPDRYCLEANERS" className = "image1"/>

    </div>
    )
  }
}
export default Main;
*/