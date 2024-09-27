// Name: Chiayi Lin
// StudentID: 301448962
// Date: 09.27.24
// File name: Layout.jsx
// Section: COMP229 SEC 010

// This is the Layout.jsx for my portfolio of web development work. It has a Navigation Bar
// and highlight the selected part.

import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect  } from 'react'
import logo from '../src/assets/image/icon.png'; 
import { useLocation } from 'react-router-dom';

export default function Layout() {
const [isActive, setActive] = useState("Home");

const location = useLocation();
useEffect(() => {
  var name = window.location.pathname.substring(1).split('/')[1];
  if(name === "")
    name = "Home"
  setActive(name.toLowerCase());
}, [location.pathname]);

 return (
  <>
   <h1>My Portfolio</h1>
   <header className="header_section">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <Link to="/MyPortfolio/" className="navbar-brand">
            <img src={logo} width={60} height={60} alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav  ">
                <li className={`nav-item + ${isActive==="home" ? 'active': ''}`}>
                  <Link to="/MyPortfolio/" className="nav-link">Home</Link>
                </li>
                <li className={`nav-item + ${isActive==="about" ? 'active': ''}`}>
                    <Link to="/MyPortfolio/about" className="nav-link">About</Link>
                </li>
                <li className={`nav-item + ${isActive==="service" ? 'active': ''}`}>
                    <Link to="/MyPortfolio/service" className="nav-link">Service</Link>
                </li>
                <li className={`nav-item + ${isActive==="project" ? 'active': ''}`}>
                    <Link to="/MyPortfolio/project" className="nav-link">Project</Link>
                </li>
                <li className={`nav-item + ${isActive==="contact" ? 'active': ''}`}>
                    <Link to="/MyPortfolio/contact" className="nav-link">Contact</Link>
                </li>
              </ul>
            </div>
            
          </div>
        </nav>
    </header>
   <hr />
   
  </>
 );
}


