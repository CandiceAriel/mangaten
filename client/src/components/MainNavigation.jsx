import React from 'react'
import { NavLink } from 'react-router-dom';

import "../assets/scss/main.scss";
import {bookCategories} from '../data/booksData';

function MainNavigation() {

  return (
    <div className='c-nav'>
      <div className="c-nav__header">
        <h1 className="c-nav__header-left"><NavLink to="/" className="c-nav__logo">Mangaten</NavLink></h1>
        <div className="c-nav__header-right nav_list-bottom">
          <div className="c-nav__list_item list-inline">My account</div>
          <div className="c-nav__list_item list-inline">Wishlist</div>
          <div className="c-nav__list_item list-inline">Cart</div>
        </div>
      </div>
      <div className="c-nav__category">
        {bookCategories.map(bookCategory =>
          <div key={bookCategory.categoryId} className="c-nav__category-item-wrapper">
            <NavLink to={`/${bookCategory.categoryName.toLowerCase()}`} className='c-nav__category-item'>
              {bookCategory.categoryName}
            </NavLink>
          </div>
        )}
      </div>
    </div>
  )
}

export default MainNavigation