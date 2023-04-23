import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";

import { books, bookCategories } from "../data/booksData";

function BooksShelf() {
  const [result, setResult] = useState([]);
  const [categories, setCategories] = useState([]);

  function fetchBoook() {
    axios.get('http://localhost:3001/api/books')
      .then(response => {
        const data = response.data;
        setResult(data);
        console.log(data)
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  };

  function fetchCategories() {
    axios.get('http://localhost:3001/api/categories')
      .then((response) => {
        const data = response.data;
        setCategories(data)
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  };

  // Format the price above to USD using the locale, style, and currency.
  let USDollar = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2, 
    minimumFractionDigits: 2
  });

  function makeDecimal(price){
    var num = USDollar.format(price)
    return num;
  }

  useEffect(() => {
    fetchCategories();
    fetchBoook();
  }, []);

  return (
    <div className="c-bookshelf">
      {categories.map(category =>
        <div key={category.shelvesId} className="c-bookshelf__shelves">
          <h4 className="c-bookshelf__shelf-title">{category.categoryName}</h4>
          <div className="c-bookshelf__shelf">
            { category.categoryName === "Manga" && 
              result.filter(item => item.categoryId === "C01").map((item, i) => (
                <NavLink
                  to={`/books/${item._id}`}
                  key={item.productId}
                  className='c-bookshelf__shelf-book'
                >
                  <img src={item.src}></img>
                  <p className="c-base__text_bold">{item.title}</p>
                  <p className="text_product-price">${makeDecimal(item.price)}</p>
                </NavLink>  
              )) 
            } 
            { category.categoryName === "Novel" && 
              books.filter(item => item.categoryId === "C02").map((item) => (
                <NavLink
                  to={`/${item.title}`}
                  key={item.productId}
                  className='c-bookshelf__shelf-book'
                >
                  <img src={item.src}></img>
                  <p className="c-base__text_bold">{item.title}</p>
                  <p className="text_product-price">${makeDecimal(item.price)}</p>
                </NavLink>  
              )) 
            } 
           { category.categoryName === "Artbook" && 
              result.filter(item => item.categoryId === "C03").map((item) => (
                <NavLink
                  to={`/${item.title}`}
                  key={item.productId}
                  className='c-bookshelf__shelf-book'
                >
                  <img src={item.src}></img>
                  <p className="c-base__text_bold">{item.title}</p>
                  <p className="text_product-price">${makeDecimal(item.price)}</p>
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