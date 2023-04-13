import React, { useEffect, useState } from 'react';

import { books,bookCategories } from "../data/data";

function BooksShelf() {

  return (
    <div className="c-bookshelf">
        {bookCategories.map(category =>
            <div key={category.shelvesId} className="c-bookshelf__shelf">
                <h4 key={category.shelvesId} className= "shelf-title">{category.categoryName}</h4>
                <ul className= "list_products list-flex-view">
                    {books?.map(product => (
                        <div className='box_product box-small' key={product.productId}>
                            <li className= "list_nav_item list-inline">
                                <img src={product.src}></img>
                                <p>{product.title}</p>
                                <p className="text_product-price">${product.price}</p>
                            </li>   
                        </div>
                    ))}
                </ul>
            </div>
        )}
    </div>
  )
}

export default BooksShelf