import React from 'react'

import "../assets/scss/main.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <ul className= "nav_header-top text-xs">
          <li className= "nav_header-item">My account</li>
          <li className= "nav_header-item">Wishlist</li>
          <li className= "nav_header-item">Cart</li>
        </ul>
      </div>
      <div className="header-bottom">
        <h1 className="header_logo">Mangaten</h1>
        <ul className= "nav_header-bottom">
          <li className= "nav_header-item">My account</li>
          <li className= "nav_header-item">Wishlist</li>
          <li className= "nav_header-item">Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header