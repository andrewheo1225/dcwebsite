import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Recieve VIP quality dry cleaning near you!
        </p>
        
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
            
           <div class='footer-link-items'>
            <h2>Quick Links</h2>
            <Link to='/aboutus'>About Us</Link>
            <Link to='/privacypolicy'>Privacy Policy</Link>
           
            <Link to='/termsofservice'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Support</h2>
            <Link to='/contactus'>Contact Us</Link>
          </div> 
          <div class='footer-link-items'>
            <h2>803 West 187th Street NY, NY</h2>
          </div> 
          
        </div>
        
      </div>
      
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              VIP Cleaners
              <i class='fab fa-typo3' />
            </Link>
          </div>
        
    </div>
  );
}

export default Footer;