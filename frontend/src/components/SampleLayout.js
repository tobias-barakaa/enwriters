import React from 'react';
import './SampleLayout.css'
import soul from '../assets/soul.png';
import manual from '../assets/manual.jpg';
import bg from '../assets/bg.png';


const SampleLayout = () => {
  return (
    <div>
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
    <img src={manual} alt="Manual written article" />

        <div>
            <p class="neon-text">Manual written</p>
            <div class="separator"></div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    </div>
</div>
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

export default SampleLayout
