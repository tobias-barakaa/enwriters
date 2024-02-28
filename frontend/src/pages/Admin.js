import axios from 'axios';
import React from 'react'
import { redirect } from 'react-router-dom';

export const loader = async () => {
    try {
      const response = await axios.get('/users/admin/app-stats');
      return response.data;
    } catch (error) {
      // Display an alert and redirect to the dashboard
      alert("You can't access this page");
      return redirect('/dashboard');
    }
  };
const Admin = () => {
  return (
    <div>
      
    </div>
  )
}

export default Admin
