import React from 'react';
import "./Register.css";
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import FormInput from '../components/FormInput';



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
      
        <label for="username">Username</label>
        <FormInput type="text" id="username" name="username" />
      
      
        <label for="email">Email</label>
        <FormInput type="email" id="email" name="email" required />
      
        <label for="password">Password</label>
        <FormInput type="password" id="password" name="password" required />
      <button type="submit">Sign in?</button>
    </form>
  </div>
</div>

  )
}

export default Register
