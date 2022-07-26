import React from 'react'
import './topbar.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillPersonFill,BsChatLeftTextFill,BsFillBellFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const Topbar = () => {
  return (
    <div className="topbar">
          <div className="tbLeft">
               <Link to="/home">
                    <span className="logo">REACT Social</span>
               </Link>
          </div>
          <div className="tbCenter">
               <div className="searchbar">
                    <AiOutlineSearch className="searchIcon"/>
                    <input type="text"placeholder='Search for friends, posts or videos' className="searchInput" />
               </div>
          </div>
          <div className="tbRight">
               <div className="tbLinks">
                    <span className="tbLink">Homepage</span>
                    <span className="tbLink">Timeline</span>
               </div>
               <div className="tbIcons">
                    <div className="tbIconItem">
                         <BsFillPersonFill/>
                         <span className="badge">1</span>
                    </div>
                    <div className="tbIconItem">
                         <BsChatLeftTextFill/>
                         <span className="badge">2</span>
                    </div>
                    <div className="tbIconItem">
                         <BsFillBellFill/>
                         <span className="badge">1</span>
                    </div>
               </div>
               <Link to="/profile">
                     <img src="/Assets/user.jpg" alt="pic" className="tbImg" />
               </Link>
               
          </div>
    </div>
  )
}

export default Topbar