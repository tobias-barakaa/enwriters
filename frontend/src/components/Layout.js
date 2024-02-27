import React from 'react'
import "./Layout.css";
import solo from '../assets/solo.png';


const Layout = () => {
  return (
    <div>
      <div class="container">
    <div class="left-side">
        <img src={solo} alt="solo" />
    </div>
    <div class="right-side">
        <h2>Words Planned Well</h2>
        <p>Your text goes here...</p>
    </div>
</div>
    </div>
  )
}

export default Layout
