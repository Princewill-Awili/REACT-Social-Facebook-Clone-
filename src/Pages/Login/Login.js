import React,{useEffect, useState} from 'react'
import './login.css'
import { auth } from '../../dummyData'
import {useNavigate} from 'react-router-dom';

const Login = () => {

     const [auth2,setAuth2] = useState([]);
     const [email,setEmail] = useState("");
     const [password,setPassword] = useState("");
     const navigate = useNavigate();
     const [error,setError] = useState(false);


     useEffect(()=>{
          const retrievedData = JSON.parse(localStorage.getItem("auth"));
          retrievedData ? setAuth2(retrievedData) : localStorage.setItem('auth',JSON.stringify(auth) )
     },[])

     console.log(auth2)

     const validate = () =>{
          const validUser = auth2.find(user =>{
               if(user.email === email && user.password === password){
                  return true;
               }else{
                    return false;
               }
          } );


          if(validUser){
               setError(false);
               navigate('/home');
          }else{
               setError(true);
          }
     }



  return (
    <div className="login">
     <div className="loginWrapper">
          <div className="loginLeft">
               <h3 className="loginLogo">REACT Social</h3>
               <span className="loginDesc">Connect with friends and the World around you on REACT Social.</span>
          </div>
          <div className="loginRight">
               <div className="loginBox">
                    {error && <span className="errorMsg">Oops...Type correct details.</span>}
                    
                    <input 
                         placeholder='Email' 
                         className="loginInput" 
                         value={email} 
                         onChange={e=>setEmail(e.target.value)} 
                    />
                    <input 
                         placeholder='Password' 
                         className="loginInput" 
                         value={password} 
                         onChange={e=>setPassword(e.target.value)}
                    />
                    <button className="loginBtn" onClick={validate}>Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="registerBtn" onClick={()=> navigate('/register')}>Create a New Account</button>
               </div>
          </div>
     </div>
    </div>
  )
}

export default Login