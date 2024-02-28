import axios from 'axios';
import React, { createContext } from 'react'
import { redirect, useLoaderData } from 'react-router-dom';

// export const loader = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:4000/api/v1/users/current-user");
//       return data;
//     } catch (error) {
//       return redirect("/");
//     }
//   };
//   const DashboardContext = createContext();
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
      rockstar
    </>
    
  )
}
export default DashboardLayout;
