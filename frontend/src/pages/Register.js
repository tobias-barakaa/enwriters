import React from 'react';
import "./Register.css";
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import FormInput from '../components/FormInput';
import axios from 'axios';
import { redirect } from 'react-router-dom';


export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await axios.post("/register", data);
    return redirect("/login");

  } catch (error) {
    return error
  }
};
const Register = () => {
   
  return (
    <div class="containerr">
  <div class="left-side">
    <div class="box">
      <h1 className='acc'>Create an Account</h1>
      <h5>
        We're glad you're here. Let's get started by creating <br />
        your account.
      </h5>
    </div>
  </div>
  <div class="right-sidee">
    <form action="#">
    <div className="signup-option google">
        <button><FaGoogle /> Sign up with Google</button>
      </div>
      <div className="signup-option facebook">
        <button><FaFacebook /> Sign up with Facebook</button>
      </div>

      <h4 className='or'>Or</h4>
      
        
        <FormInput type="text" id="username" name="username" labelText="Username" />
      
      
        <FormInput type="email" id="email" name="email" labelText="Email" />
      
        <FormInput type="password" id="password" name="password" labelText="Password" />
      <button className='buttonn' type="submit">Sign Up?</button>
      <h6>Already have an account?  <span>Sign In</span></h6>
    </form>
  </div>
</div>

  )
}

export default Register
