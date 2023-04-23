import React from 'react';
import BooksShelf from '../components/BooksShelf';
import MainNavigation from '../components/MainNavigation';
import Promotion from '../components/Promotion';

const Home = () => {
  return (
    <div className= "c-home">
      <MainNavigation isPOS={false} />
      <div className= "c-home__content">
        <Promotion />
        <BooksShelf />     
      </div>
    </div>
  )
}

export default Home;