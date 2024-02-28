import axios from 'axios';
import React from 'react'
import { Form, Link, redirect } from 'react-router-dom';
import FormInput from '../components/FormInput';
import { Media, Social } from '../components';
import SubmitButton from '../components/SubmitButton';

export const action = async({request}) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    
  
    try {
      await axios.post('http://localhost:4000/api/v1/login', data);
      alert('login successful');
      return redirect('/dashboard');
    } catch (error) {
      return error;
    }
  }

const Login = () => {
  return (
    <div class="containerr">
        <Social />
        <div class="right-sidee">
        <Media />
        <Form method="post">
      <FormInput type="email" id="email" name="email" labelText="Email" />
      
      <FormInput type="password" id="password" name="password" labelText="Password" />
      <SubmitButton />
      </Form>
      <h6>Don't have an account?</h6>
      <Link to="/register"><span>Sign Up</span></Link>
      </div>

    </div>
  )
}

export default Login
