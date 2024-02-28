import React from 'react'
import { Link } from 'react-router-dom'

const Social = () => {
  return (
    <>
      <div class="header">
    <Link to="/">Home</Link>
    </div>
  <div class="left-side">
    <div class="box">
      <h1 className='acc'>Create an Account</h1>
      <h5>
        We're glad you're here. Let's get started by creating <br />
        your account.
      </h5>
    </div>
  </div>
    </>
  )
}

export default Social
