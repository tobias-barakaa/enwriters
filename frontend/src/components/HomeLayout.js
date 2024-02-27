import React from 'react';
import './HomeLayout.css'

import SampleLayout from './SampleLayout';
import Navigation from './Navigation';
import HeaderContainer from './HeaderContainer';


const HomeLayout = () => {
  return (
    <div>
   <Navigation />
<HeaderContainer />

<SampleLayout />

    </div>
  )
}

export default HomeLayout
