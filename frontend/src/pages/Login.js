import axios from 'axios';
import React from 'react'
import { Form, Link, redirect, useNavigate, useNavigation } from 'react-router-dom';
import FormInput from '../components/FormInput';
import { Media, Social } from '../components';
import SubmitButton from '../components/SubmitButton';

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
  
    try {
      await axios.post('http://localhost:4000/api/v1/login', data);
      console.log(data)
      alert('login successful');
      return redirect('/dashboard'); // Redirect to the dashboard after successful login
    } catch (error) {
      return error;
    }
  }

const Login = () => {
    const navigate = useNavigate();
const loginDemoUser = async () => {
  const data = {
    "email": "zippy@gmail.com",
    "password": "secret123",
  }
  try {
    await axios.post('http://localhost:4000/api/v1/auth/logi', data);
    alert('take a look at ');
    navigate('/dashboard')    
  } catch (error) {
    alert('error');
  }
}
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'Loading...';
  return (
    <div class="containerr">
        <Social />
        <div class="right-sidee">
        <Media />
        <Form method="post">
      <FormInput type="email" id="email" name="email" labelText="Email" />
      
      <FormInput type="password" id="password" name="password" labelText="Password" />
      <SubmitButton isSubmitting={isSubmitting} />
          <button onClick={loginDemoUser}>Explore The App</button>
      </Form>
      <h6>Don't have an account?</h6>
      <Link to="/register"><span>Sign Up</span></Link>
      </div>

    </div>
  )
}

export default Login
