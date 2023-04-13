import React from 'react'
import { NavLink } from 'react-router-dom';

import "../assets/scss/main.scss";
import {bookCategories} from '../data/data';

function MainNavigation() {

  return (
    <div className='c-nav'>
      <div className="c-nav__bottom">
        <h1 className="c-nav__bottom-left nav_logo"><NavLink to="/" className="text_link-plain text-red">Mangaten</NavLink></h1>
        <div className="c-nav__bottom-right nav_list-bottom">
          <div className="c-nav__list_item list-inline">My account</div>
          <div className="c-nav__list_item list-inline">Wishlist</div>
          <div className="c-nav__list_item list-inline">Cart</div>
        </div>
      </div>
      <div className="c-nav__category">
        {bookCategories.map(bookCategory =>
          <div key={bookCategory.categoryId} className="c-nav__category-item-wrapper box-red">
            <NavLink to={"/" + bookCategory.categoryName.toLowerCase()} className='c-nav__category-item'>{bookCategory.categoryName}</NavLink>
          </div>
        )}
      </div>
    </div>
  )
}

export default MainNavigation