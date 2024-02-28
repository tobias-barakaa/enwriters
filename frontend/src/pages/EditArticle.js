import axios from 'axios';
import React from 'react'
import { redirect } from 'react-router-dom';

export const loader = async ({params}) => {
    try {
  const {data} = await axios.get(`/articles/${params.id}`);
    return data  
  } catch (error) {
      return redirect('/dashboard/all-articles');
    }
  }
  
  
  export const action = async ({request, params}) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData)
    try {
      await axios.patch(`/articles/${params.id}`, data);
      return redirect('/dashboard/all-articles');
    } catch (error) {
      return error;
    }
  }

const EditArticle = () => {
  return (
    <div>
      
    </div>
  )
}

export default EditArticle
