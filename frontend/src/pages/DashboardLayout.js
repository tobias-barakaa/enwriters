import axios from 'axios';
import React from 'react'
import { redirect } from 'react-router-dom';

export const loader = async () => {
    try {
      const { data } = await axios.get("/users/current-user");
      return data;
    } catch (error) {
      return redirect("/");
    }
  };

const DashboardLayout = () => {
  return (
    <div>
      <h1>What's going on</h1>
    </div>
  )
}

export default DashboardLayout
