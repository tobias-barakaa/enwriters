import React from 'react';
import './HomeLayout.css'
import { FaSearch, FaFacebook } from 'react-icons/fa'
import AddArticle from '../pages/AddArticle';
import bg from '../assets/bg.png';
import backend from '../assets/backend.jpg';
import SampleLayout from './SampleLayout';
import Navigation from './Navigation';
import HeaderContainer from './HeaderContainer';


const HomeLayout = () => {
  return (
    <div>

   <Navigation />
   
    


<HeaderContainer />




<SampleLayout />








 
  <div className="hire-expert">
     <div className="hire-expert">
    
    <h2>Hire an expert</h2>
    <p>Find certified professional freelancers and agencies to<br /> help you build your perfect publication.</p>
    <button className="explore-button">
      Explore <i className="fas fa-arrow-right"></i>
    </button>
  </div>


    <img  className="bg" src={bg} alt="Background"  />
  </div>

  









    </div>
  )
}

export default HomeLayout
