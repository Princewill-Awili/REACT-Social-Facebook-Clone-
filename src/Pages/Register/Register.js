import React from 'react'
import './register.css'

const Register = () => {
  return (
    <div className="register">
          <div className="loginWrapper">
               <div className="loginLeft">
                    <h3 className="loginLogo">REACT Social</h3>
                    <span className="loginDesc">Connect with friends and the World around you on REACT Social.</span>
               </div>
               <div className="loginRight">
                    <div className="loginBox">
                         <input placeholder='Username' className="loginInput" />
                         <input placeholder='Email' className="loginInput" />
                         <input placeholder='Password' className="loginInput" />
                         <input placeholder='Confirm Password' className="loginInput" />
                         <button className="loginBtn">Sign Up</button>
                         
                         <button className="registerBtn">Log into Account</button>
                    </div>
               </div>
          </div>
    </div>
  )
}

export default Register