import React from 'react'
import { NavLink, BrowserRouter } from 'react-router-dom';

import "../assets/scss/main.scss";
import { bookCategories } from '../data/data';
import PageRoutes from '../routes/PageRoutes';

function MainNavigation() {

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
        <h1 className="nav-bottom-left nav_logo"><NavLink to="/home" className= "text_link-plain text-red">Mangaten</NavLink></h1>
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
              <li key={bookCategory.categoryId} className= "list_categories_item list-inline">
                <NavLink to={"/"+bookCategory.categoryName.toLowerCase()} className="link-nav-categories">{bookCategory.categoryName}</NavLink>
              </li>
            </div>
          )}
        </ul>
      </div>
      <div>
        <PageRoutes />
      </div>
    </div>
  )
}

export default MainNavigation