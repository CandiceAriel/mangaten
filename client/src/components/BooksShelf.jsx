import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";

import TokyoRevengersCover from "../assets/images/TokyoRevengersCover.jpg";
import TheFirstSlamDunkCover from '../assets/images/TheTheFirstSlamDunkReSource.jpg'
import { books, bookCategories } from "../data/booksData";

function BooksShelf() {
  const [result, setResult] = useState([]);

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
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  };

  function makeDecimal(num){

    var leftDecimal = num.toString().replace('.', ''),
        rightDecimal = '00';
    
    if(leftDecimal.length > 2){          
      rightDecimal = leftDecimal.slice(-2);
      leftDecimal = leftDecimal.slice(0, -2);
    }
    
    var n = Number(leftDecimal+'.'+rightDecimal).toFixed(2);        
    return (n === "NaN") ? num:n        
  }

  useEffect(() => {
    fetchCategories();
    fetchBoook();
  }, []);

  return (
    <div className="c-bookshelf">
      {bookCategories.map(category =>
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
              books.filter(item => item.categoryId === "C03").map((item) => (
                <NavLink
                  to={`/${item.title}`}
                  key={item.productId}
                  className='c-bookshelf__shelf-book'
                >
                  <img src={item.src}></img>
                  <p className="c-base__text_bold">{item.title}</p>
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