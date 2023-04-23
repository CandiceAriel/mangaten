import React from 'react'
import Sidebar from '../components/Sidebar'
import MainNavigation from '../components/MainNavigation';

const Pos = () => {
  return (
    <div className='c-pos'>
      <MainNavigation isPOS={true} />
      <div className='c-pos__wrapper'>
        <div className='c-pos__wrapper-items'>
          Items
        </div>
        <div className='c-pos__wrapper-receipt'>
          Receipt
        </div>
      </div>
    </div>
  )
}

export default Pos;