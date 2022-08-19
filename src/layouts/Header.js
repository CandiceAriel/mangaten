import React from 'react'

import "../assets/scss/main.scss";

const Header = () => {
  return (
    <div className="header">
        <h1 className="header_logo">Mangaten</h1>
        <ul className= "nav_header">
            <li className= "nav_header-item">My account</li>
            <li className= "nav_header-item">Wishlist</li>
            <li className= "nav_header-item">Cart</li>
        </ul>
    </div>
  )
}

export default Header