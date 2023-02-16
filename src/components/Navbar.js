import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import './Navbar.css'


const Navbar = () => {

    const[click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)
;


    return (
      <>
        <nav className="navbar">
          <Link to="/" className="navbar-logo">
            Minimalist
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Art"
                className="nav-links"
                onClick={closeMobileMenu}>
                Art
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/SignIn"
                className="nav-links"
                onClick={closeMobileMenu}>
                <Image src="assets/user-white-01.png"/>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/basket"
                className="nav-links"
                onClick={closeMobileMenu}>
                <Image src="assets/bag-white-01.png"/>
              </Link>
            </li>
            
            
          </ul>
          
        </nav>
      </>
    );
}

export default Navbar

const Image = styled.img`
width:50px;
`