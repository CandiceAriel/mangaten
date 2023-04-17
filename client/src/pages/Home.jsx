import React from 'react';
import BooksShelf from '../components/BooksShelf';
import MainNavigation from '../components/MainNavigation';
import Promotion from '../components/Promotion';

function Home() {
  return (
    <div className= "c-home">
      <MainNavigation />
      <div className= "c-home__content">
        <Promotion />
        <BooksShelf />     
      </div>
    </div>
  )
}

export default Home;