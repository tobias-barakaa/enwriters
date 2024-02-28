import axios from 'axios';
import React from 'react'
import { redirect } from 'react-router-dom';

export const action = async({request}) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    
  
    try {
      await axios.post('/login', data);
      alert('login successful');
      return redirect('/dashboard');
    } catch (error) {
      return error;
    }
  }

const Login = () => {
  return (
    <div>
      Login
    </div>
  )
}

export default Login
