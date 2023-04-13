import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';

import "../assets/scss/main.scss";
import { bookCategories } from '../data/data';
import PageRoutes from '../routes/PageRoutes';

function NavCategories() {
  return (
    <div className="c-categories">
        <ul className= "c-categories__list list-flex-view">
            {bookCategories.map ( bookCategory =>
                <div key={bookCategory.categoryId} className= "c-categories__list_wrapper box-red box-small box_category">
                    <li key={bookCategory.categoryId} className= "c-categories__list_item list-inline">
                        <NavLink to={"/"+bookCategory.categoryName.toLowerCase()} className="link-nav-categories">{bookCategory.categoryName}</NavLink>
                    </li>
                </div>
            )}
        </ul>
    </div>
  )
}

export default NavCategories