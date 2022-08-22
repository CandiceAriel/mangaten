import React, { useEffect, useState } from 'react';

import { books } from "../data/data";

function BooksShelf() {
  const [shelves,setShelves] = useState ([
    {
        shelvesId: "NR",
        label: "New Release",
        prod: {books}
    },
    {
        shelvesId: "BS",
        label: "Best Seller",
        prod: {books}
    }
  ]);

  console.log(shelves)

  return (
    <div>
        {shelves.map(shelf =>
            <div key={shelf.shelvesId}>
                <h4 key={shelf.shelvesId} className= "shelf-title">{shelf.label}</h4>
                <ul className= "list_products list-flex-view">
                    {shelf.prod.books?.map(product => (
                        <div className='box-small'>
                            <li className= "list_nav_item list-inline" key={product.productId}>
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