import React from 'react'
import { FaSearch, FaFacebook } from 'react-icons/fa'
import enwriters from '../assets/enwriters.png';
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



    <nav className="navbar navbar-expand-lg navbar-light bg-blue-tint shadow" style={{ height: '100px' }}>
  <div className="container-fluid">
    <a className="navbar-brand text-black fs-4" href="/enwriters">
      <img src={enwriters} alt="enwriters" width="200" height="200" className="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-black" aria-current="page" href="/what">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black" href="/hey">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black" href="/contacts">Contacts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black" href="/services">Services</a>
        </li>
      </ul>
    </div>
  </div>
</nav>



    </div>
  )
}

export default Navigation
