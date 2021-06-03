import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { AiFillPhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Recieve VIP quality dry cleaning near you!
        </p>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Quick Links</h2>
            <Link to="/aboutus">About Us</Link>
            <Link to="/privacypolicy">Privacy Policy</Link>

            <Link to="/termsofservice">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact</h2>
            <p2 className="contact">
              +1 (212)-923-2761
              <AiFillPhone className="phone-icon" />
            </p2>

            <p2 className="address">
              803 West 187th Street NY, NY
              <GoLocation className="location-icon" />
            </p2>
          </div>
        </div>
      </div>

      <div class="footer-logo">
        <Link to="/" className="social-logo">
          VIP Cleaners
          <i class="fab fa-black-tie" />
        </Link>
      </div>
      <div class="footer-logo">
        <p3 className="copyright-tag"> © 2021 All Rights Reserved</p3>
      </div>
    </div>
  );
}

export default Footer;
