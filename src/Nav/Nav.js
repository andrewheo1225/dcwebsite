import React from 'react';
import './../App.css';
import {Link} from "react-router-dom";

function Nav(){
    const navStyle = {
        color : 'white'
    }
    return (
        <nav>
            <h2>VIP Dry Cleaners</h2>
            <ul className="nav-links">
                <Link style = {navStyle} to = "/About">
                    <li>About</li>
                </Link>

                <Link style = {navStyle} to = "/Contact">
                    <li>Contact</li>
                </Link>
                <Link style = {navStyle} to = "/">
                    <li>Return to Main</li>
                </Link>
                <Link style = {navStyle} to = "/Faq">
                    <li>FAQ</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;