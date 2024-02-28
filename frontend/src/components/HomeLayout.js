import React from 'react';
import './HomeLayout.css'

import SampleLayout from './SampleLayout';
import Navigation from './Navigation';
import HeaderContainer from './HeaderContainer';
import { Outlet } from 'react-router-dom';


const HomeLayout = () => {
  return (
    <div>
   <Outlet />

    </div>
  )
}

export default HomeLayout
