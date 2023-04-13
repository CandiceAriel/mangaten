import React, { useEffect, useState } from 'react';

import { books, bookCategories } from "../data/data";

function BooksShelf() {

  return (
    <div className="c-bookshelf">
      {bookCategories.map(category =>
        <div key={category.shelvesId} className="c-bookshelf__shelves">
          <h4 key={category.shelvesId} className="c-bookshelf__shelf-title">{category.categoryName}</h4>
          <div key={category.shelvesId} className="c-bookshelf__shelf">
            {books?.map(product => (
              <div className='c-bookshelf__shelf-books box_product box-small' key={product.productId}>
                <div className="list_nav_item list-inline">
                  <img src={product.src}></img>
                  <p>{product.title}</p>
                  <p className="text_product-price">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default BooksShelf