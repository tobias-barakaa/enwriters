import React from 'react';
import './HomeLayout.css'
import { FaSearch, FaFacebook } from 'react-icons/fa'
import enwriters from '../assets/enwriters.png';
import AddArticle from '../pages/AddArticle';
import ex from '../assets/3.png';
import backend from '../assets/backend.jpg';
import soul from '../assets/soul.png';
import manual from '../assets/manual.jpg';
import SampleLayout from './SampleLayout';


const HomeLayout = () => {
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

<div>

<div className="header-container">
  <div className="header-text">
    <h1>Your Company Name</h1>
    <p>Providing top-notch digital marketing and article writing services</p>
    <div className="button-group">
      <button className="btn btn-blue">Get Started</button>
      <button className="btn btn-dark-blue">Learn More</button>
      <button className="btn btn-light-blue">View Samples</button>
    </div>
  </div>
</div>
</div>



{/* <div className='yeah'>
<div className="flow">
<img className='backend' src={backend} alt="image"  />

<div class="right">
        <p class="text">Manual written</p>
    </div>

</div>


<div className="flow">

<div class="left">
        <p class="text">Manual written</p>
    </div>
    <img className='backend' src={backend} alt="image"  />

</div>

</div> */}
<div class="sample-articles">Sample Articles</div>



<div class="samplee">
    <div class="left">
        <img src={soul} alt='backend' />
        <div>
            <p class="neon-text">AI-generated</p>
            <div class="separator"></div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    </div>
    <div class="right">
    <img src={manual} alt="Right Image" />

        <div>
            <p class="neon-text">Manual written</p>
            <div class="separator"></div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    </div>
</div>







<div className="two-ceps">
 
  <div className="hire-expert">
     <div className="hire-expert">
    
    <h2>Hire an expert</h2>
    <p>Find certified professional freelancers and agencies to<br /> help you build your perfect publication.</p>
    <button className="explore-button">
      Explore <i className="fas fa-arrow-right"></i>
    </button>
  </div>


    <img src={ex} alt="image"  />
  </div>

  
</div>









    </div>
  )
}

export default HomeLayout
