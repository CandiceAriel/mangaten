import React, { useState,useEffect } from 'react';
import { NavLink } from "react-router-dom";

import { books, bookCategories } from "../data/booksData";

function BooksShelf() {

  useEffect(() => {
  }, []);


  return (
    <div className="c-bookshelf">
      {bookCategories.map(category =>
        <div key={category.shelvesId} className="c-bookshelf__shelves">
          <h4 className="c-bookshelf__shelf-title">{category.categoryName}</h4>
          <div className="c-bookshelf__shelf">
            { category.categoryName === "Manga" 
              ? books.filter(item => item.categoryId === "C01").map((item) => (
                <NavLink
                  to={`/${item.title}`}
                  key={item.productId}
                  className='c-bookshelf__shelf-book'
                >
                  <img src={item.src}></img>
                  <p>{item.title}</p>
                  <p className="text_product-price">${item.price}</p>
                </NavLink>  
              )) 
              :  books.filter(item => item.categoryId === "C02").map((item) => (
                <NavLink
                  to={`/${item.title}`}
                  key={item.productId}
                  className='c-bookshelf__shelf-book'
                >
                  <img src={item.src}></img>
                  <p>{item.title}</p>
                  <p className="text_product-price">${item.price}</p>
                </NavLink>  
              )) 
            }
          </div>
        </div>
      )}
    </div>
  )
}

export default BooksShelf