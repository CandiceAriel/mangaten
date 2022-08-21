import React from 'react'
import { useState } from 'react';

import "../assets/scss/main.scss";

function MainNavigation() {
  const bookCategories = [
    {
      categoryId: "C01",
      categoryName: "Manga"
    },
    {
      categoryId: "C02",
      categoryName: "Novels"
    },
    {
      categoryId: "C03",
      categoryName: "Artbooks"
    },
    {
      categoryId: "C04",
      categoryName: "Study Guide"
    },
    {
      categoryId: "C05",
      categoryName: "Others"
    }
  ]

  return (
    <div className='navbar'>
      <div className="nav-top">
        <ul className= "list_nav-top text-xs">
          <li className= "list_nav_item list-inline">My account</li>
          <li className= "list_nav_item list-inline">Wishlist</li>
          <li className= "list_nav_item list-inline">Cart</li>
        </ul>
      </div>
      <div className="nav-bottom">
        <h1 className="nav-bottom-left nav_logo">Mangaten</h1>
        <ul className= "nav-bottom-right list_nav-bottom ">
          <li className= "list_nav_item list-inline">My account</li>
          <li className= "list_nav_item list-inline">Wishlist</li>
          <li className= "list_nav_item list-inline">Cart</li>
        </ul>
      </div>
      <div className="categories">
        <ul className= "list_categories">
          {bookCategories.map ( bookCategory =>
            <div key={bookCategory.categoryId} className= "box-red box-small margin-right">
              <li key={bookCategory.categoryId} className= "list_categories_item list-inline">{bookCategory.categoryName}</li>
            </div>
          )}
        </ul>
      </div>
    </div>
  )
}

export default MainNavigation