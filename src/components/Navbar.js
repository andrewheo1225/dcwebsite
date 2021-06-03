import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            VIP Cleaners
            <i className = "icon" class="fab fa-black-tie" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/aboutus" className="nav-links" onClick={closeMobileMenu}>
               About Us
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to="/businesshours" className="nav-links" onClick={closeMobileMenu}>
                Business Hours
              </Link>
            </li>

            <li>
              <Link
                to=""
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline" value = "/">Home</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
