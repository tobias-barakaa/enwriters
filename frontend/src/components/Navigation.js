import React from 'react'
import { FaSearch, FaFacebook } from 'react-icons/fa'
import './Navigation.css'

const Navigation = () => {
  return (
    <div>
      <div className='short-nav'>
      <div className='nav-item'>
        <span className='nav-icon search-icon'><FaSearch /></span>
        <span className='nav-text'>Search item</span>
      </div>
      <div className='nav-item'>
        <span className='nav-icon'><FaFacebook /></span>
      </div>
    </div>
    </div>
  )
}

export default Navigation
