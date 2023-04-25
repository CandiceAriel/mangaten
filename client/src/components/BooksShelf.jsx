import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";

import { books, bookCategories } from "../data/booksData";

function BooksShelf() {
  const bookArr= [];
  const [result, getResults] = useState([]);
  const [categories, setCategories] = useState([]);

  function fetchBoook() {
    axios.get('http://localhost:3001/books')
      .then(response => {
        const data = response.data;
        getResults(data);
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
    return result;
  };

  function fetchCategories() {
    axios.get('http://localhost:3001/categories')
      .then((response) => {
        const data = response.data;
        setCategories(data)
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
    return categories;
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
        <div key={category.category_id} className="c-bookshelf__shelves">
          <h4 className="c-bookshelf__shelf-title">{category.category}</h4>
          <div className="c-bookshelf__shelf">
            { category.category === "Artbook" && 
              books.filter(item => item.category_id === 1).map((item) => (
                <NavLink
                  to={`/${item.title}`}
                  key={item.productId}
                  className='c-bookshelf__shelf-book'
                >
                  <img src={item.picture}></img>
                  <p className="c-base__text_bold">{item.title}</p>
                  <p className="text_product-price">${makeDecimal(item.price)}</p>
                </NavLink>  
              )) 
            } 
            { category.category === "Manga" && 
               result.filter(item => item.category_id === 2).map((item, i) => (
                <NavLink
                  to={`/books/${item.book_id}`}
                  key={item.book_id}
                  className='c-bookshelf__shelf-book'
                >
                  <img src={item.cover}></img>
                  <p className="c-base__text_bold">{item.title} <span>{item.vol}</span></p>
                  <p className="text_product-price">${makeDecimal(item.price)}</p>
                </NavLink>  
              )) 
            } 
            { category.category === "Novel" && 
              books.filter(item => item.category_id === 3).map((item) => (
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