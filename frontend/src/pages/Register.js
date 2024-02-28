import React from 'react';
import "./Register.css";
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import FormInput from '../components/FormInput';
import axios from 'axios';
import { Form, Link, redirect } from 'react-router-dom';
import SubmitButton from '../components/SubmitButton';
import { Social } from '../components';
import { Media } from '../components';


export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    await axios.post("http://localhost:4000/api/v1/register", data);
    return redirect("/login");

  } catch (error) {
    return error
  }
};
const Register = () => {
   
  return (
    <div class="containerr">
  <Social />
  <div class="right-sidee">
   
    <Media />
    <Form method="post">
      <FormInput type="text" id="name" name="name" labelText="FirstName" />
        
        <FormInput type="text" id="lastName" name="lastName" labelText="Last Name" />
      
      
        <FormInput type="email" id="email" name="email" labelText="Email" />
      
        <FormInput type="password" id="password" name="password" labelText="Password" />
      <SubmitButton />
      </Form>
      <h6>Already have an account?  </h6>
      <Link to="/login"><span>Sign In</span></Link>
  
  </div>
</div>

  )
}

export default Register
