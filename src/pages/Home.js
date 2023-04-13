import React from 'react'
import BooksShelf from '../components/BooksShelf';
import MainNavigation from '../components/MainNavigation';

function Home() {
  return (
    <div className= "home">
      <MainNavigation />
      <BooksShelf />     
    </div>
  )
}

export default Home;