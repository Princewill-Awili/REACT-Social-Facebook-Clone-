import React, {useState} from 'react'
import './post.css'

import {FiMoreHorizontal} from 'react-icons/fi'
import {AiFillLike} from 'react-icons/ai'
import {BsHeartFill} from 'react-icons/bs'


const Post = ({id,desc,photo,date, userID,likes,comments,users,user}) => {

     const [like,setLike] = useState(likes);
     const [liked,setLiked] = useState(false);

     const handleLike = () => {
          liked? setLike(likes-1) : setLike(likes+1);
          setLiked(!liked);
     }


  return (
    <div className="post">
     <div className="postWrapper">
          <div className="postTop">
               <div className="topLeft">
                    <img src={user? `${user.pic}`:`/${users[userID - 1].pic}`} alt="foto" className="postProfileImg" />
                    <span className="posterName">{user ? user.username: users[userID - 1].username}</span>
                    <span className="time">{date}</span>
               </div>
               <div className="topRight">
                    <FiMoreHorizontal/>
               </div>
          </div>
          <div className="postCenter">
               <span className="postText">{desc}</span>
               <img src={photo} alt="postImg" className="postImg" style={{display:photo?"flex": "none"}} />
          </div>
          <div className="postBottom">
               <div className="bottomLeft">
                    <div className="iconBg like" onClick={handleLike}>
                         <AiFillLike className='reactIcons'/>
                    </div>
                    <div className="iconBg heart" onClick={handleLike}>
                         <BsHeartFill className='reactIcons'/>
                    </div>
                    <div className="likeCounter">{like} people like it</div>
                    
               </div>
               <div className="bottomRight">
                    <span className="commentsCounter">{comments} comments</span>
               </div>
          </div>
     </div>
    </div>
  )
}

export default Post