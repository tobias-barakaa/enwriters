import React from 'react';
import './HeaderContainer.css'
import { Link } from 'react-router-dom';

const HeaderContainer = () => {
  return (
    <div>
<div className="header-container">
  <div className="header-text">
    <h1>Your Company Name</h1>
    <p>Providing top-notch digital marketing and article writing services</p>
    <div className="button-group">
      <button className="btn btn-blue">
        <Link to="/register">Get Started</Link>
      </button>
      <button className="btn btn-dark-blue">Learn More</button>
      <button className="btn btn-light-blue">View Samples</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default HeaderContainer
