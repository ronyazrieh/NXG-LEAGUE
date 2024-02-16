import React from "react";
import { Link } from "react-router-dom";
import SUI from "./SUI.png";
import './NavBar.css';

function NavBar(){
    return(
        <div className='nav-bar'>
            <nav>
                <div id="nav-container">
                    <ul className="nav-row">
                        <li><Link textDecoration='inherit'to="/" className="links">Home</Link></li>
                        <li><Link to="/RegisterNow" className="links">Register Now</Link></li>
                        <li><Link to="/ContactUs" className="links">Contact Us</Link></li>
                    </ul>

        
                    <img src={SUI} id="logo"/>

                    <ul className="nav-row">
                        <li><Link to="/Divisions" className="links">Divisions</Link></li>
                        <li><Link to="/Events" className="links">Events</Link></li>
                        <li><Link to="/" className="links">Coming Soon</Link></li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}


export default NavBar