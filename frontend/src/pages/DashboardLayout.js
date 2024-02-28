import axios from 'axios';
import "./DashboardLayout.css";
import React, { createContext } from 'react'
import { AiFillDashboard, AiOutlineSetting, AiOutlineCreditCard, AiOutlineWallet, AiOutlineUser, AiOutlineBell } from 'react-icons/ai';

import { redirect, useLoaderData } from 'react-router-dom';

const userQuery = {
    queryKey: ['user'],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:4000/api/v1/users/current-user");
      return data;
    },
  };
  
  export const loader = (queryClient) => async () => {
    try {
      return await queryClient.ensureQueryData(userQuery);
    } catch (error) {
      return redirect('/');
    }
  };


const DashboardLayout = () => {
  return (
    <>
       <>
      <div class="contain">
        <div class="navigate">
          <input type="search" placeholder="Search..." class="search-in" />
          <div class="nav-it">Another Item</div>
          <div class="nav-it">Payment</div>
        </div>
        <div class="sidebar">
          <div className="sidebar-item">
            <AiFillDashboard className="icon" /> Order Article
          </div>
          <div className="sidebar-item">
            <AiOutlineSetting className="icon" /> Settings
          </div>
          <div className="sidebar-item">
            <AiOutlineCreditCard className="icon" /> Payment History
          </div>
          <div className="sidebar-item">
            <AiOutlineWallet className="icon" /> Wallet
          </div>
          <div className="sidebar-item">
            <AiOutlineUser className="icon" /> Profile
          </div>
          <div className="sidebar-item">
            <AiOutlineBell className="icon" /> Notifications
          </div>
        </div>
      </div>
    </>
    </>
    
  )
}
export default DashboardLayout;
