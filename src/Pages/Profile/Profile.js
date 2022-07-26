import React from 'react'
import './profile.css'

import Topbar from '../../Components/Topbar/Topbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import Rightbar from '../../Components/Rightbar/Rightbar'

const Profile = () => {
  return (
     <>
     <Topbar/>
     <div className="profile">
       <Sidebar/>
       <div className="profileRight">
          <div className="profileRightTop">
               <div className="profileCover">
                    <img src="/Assets/Posts/cover.jpg" alt="cover" className="profileCoverImg" />
                    <img src="/Assets/user.jpg" alt="avatar" className="profileImg" />
               </div>
               <div className="profileInfo">
                    <h4 className="profileName">Natalia Ibechukwu</h4>
                    <span className='profileDesc'>Hello Friends!</span>
               </div>
          </div>
          <div className="profileRightBottom">
               <Feed/>
               <Rightbar location="profile"/>
          </div>
       </div>
     </div>
   </>
  )
}

export default Profile