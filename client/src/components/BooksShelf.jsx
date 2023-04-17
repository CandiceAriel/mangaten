import React, { useState,useEffect } from 'react';
import { NavLink } from "react-router-dom";

import { books, bookCategories } from "../data/booksData";

function BooksShelf() {
  const [mangas, setMangas] = useState([]);

  // function CheckBooks() {
  //   books?.filter(categoryId => categoryId === "C01").map((product) => (
  //     setMangas(product)
  //   ));

  //   console.log(mangas);
  // }

  // useEffect(() => {
  //   CheckBooks()//first execution
  // }, []);


  return (
    <div className="c-bookshelf">
      {bookCategories.map(category =>
        <div key={category.shelvesId} className="c-bookshelf__shelves">
          <h4 className="c-bookshelf__shelf-title">{category.categoryName}</h4>
          <div className="c-bookshelf__shelf">
            {category.items?.map((product) => (
              <NavLink
                to={`/${product.title}`}
                key={product.productId}
                className='c-bookshelf__shelf-book'
              >
                <img src={product.src}></img>
                <p>{product.title}</p>
                <p className="text_product-price">${product.price}</p>
              </NavLink>
            ))}
            {/* {books?.filter(categoryId => categoryId === category.categoryId).map((product,i) => (
              <div  key= {i}>
                {product.map(( prod ) => (
                  <NavLink
                    to={`/${prod.title}`}
                    key={prod.productId}
                    className='c-bookshelf__shelf-book'
                  >
                    <img src={prod.src}></img>
                    <p>{prod.title}</p>
                    <p className="text_product-price">${prod.price}</p>
                  </NavLink>  
                ))}
              </div>
            ))} */}
          </div>
        </div>
      )}
    </div>
  )
}

export default BooksShelf