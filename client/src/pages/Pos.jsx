import React, { useState,useEffect } from 'react'
import axios from 'axios';

import MainNavigation from '../components/MainNavigation';

const Pos = () => {
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
    fetchBoook();
  }, []);

  return (
    <div className='c-pos'>
      <MainNavigation isPOS={true} />
      <div className='c-pos__wrapper'>
        <div className='c-pos__wrapper-items'>
          { result.map((item, i) => (
            <div
              key={item.productId}
              className='c-pos__item'
            >
              <img src={item.picture}></img>
              <p className="c-base__text_bold">{item.title} ({item.vol})</p>
              <p className="text_product-price">${makeDecimal(item.price)}</p>
            </div>  
            )) 
          }
        </div>
        <div className='c-pos__wrapper-receipt'>
          Receipt
        </div>
      </div>
    </div>
  )
}

export default Pos;