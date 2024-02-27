import React from 'react';
import './SampleLayout.css'
import soul from '../assets/soul.png';
import manual from '../assets/manual.jpg';

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
     
    </div>
  )
}

export default SampleLayout
