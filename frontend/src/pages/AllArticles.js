import axios from 'axios';
import React from 'react'

export const loader = async ({request}) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ])
    console.log(params);
    try {
      const {data} = await axios.get("/articles", {
        params,
      });
      
      return {data, searchValues:{...params}}
      
    } catch (error) {
      console.error("Error retrieving articles:", error);
      if (error.response) {
        console.error("Response data:", error.response.data.msg);
        console.error("Response status:", error.response.status);
      }
      
    }
  }
const AllArticles = () => {
  return (
    <div>
      
    </div>
  )
}

export default AllArticles
