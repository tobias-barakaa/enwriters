import React from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'

const Media = () => {
  return (
    <>
      <div className="signup-option google">
        <button><FaGoogle /> Sign up with Google</button>
      </div>
      <div className="signup-option facebook">
        <button><FaFacebook /> Sign up with Facebook</button>
      </div>

      <h4 className='or'>Or</h4>
    </>
  )
}

export default Media
