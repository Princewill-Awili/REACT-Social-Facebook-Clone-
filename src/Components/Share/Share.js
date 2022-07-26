import React,{useRef,useContext, useState} from 'react'
import { dataContexts } from '../../context'
import './share.css'
import {MdPermMedia, MdOutlineEmojiEmotions} from 'react-icons/md'
import {AiFillTag} from 'react-icons/ai'
import {IoLocationSharp} from 'react-icons/io5'
import { nanoid } from 'nanoid'


const Share = () => {

 const fileRef = useRef();
 const{setSharedPosts} = useContext(dataContexts);

 const[postText,setPostText] = useState('');
 const[postImg,setPostImg] = useState('')


 const selectFile = () => {
     console.log(fileRef.current.files);
     setPostImg("/Assets/Posts/"+ fileRef.current.files[0].name)
 }

 const sharePost = () =>{
     const newPost = {
          id:nanoid(),
          desc:postText,
          photo:postImg,
          userID:nanoid(), 
          likes:Math.floor(Math.random()*20),
          user:{pic:'/Assets/user.jpg', username:'Natalia Ibechukwu'},
          date:`${Math.floor(Math.random()*10)} mins ago`,
          comments: Math.floor(Math.random()*10)
     }
     setSharedPosts(prev => [newPost,...prev])
     setPostText('')
 }


  return (
    <div className="share">
          <div className="shareWrapper">
               <div className="shareTop">
                    <img src="/Assets/user.jpg" alt="" className="shareProfilePic" />
                    <input 
                         type="text" 
                         className="shareInput" 
                         placeholder="What is on your mind Natalia?"
                         value={postText}
                         onChange ={ e => setPostText(e.target.value)}
                    />
               </div>
               <hr className="shareHr" />
               <div className="shareBottom">
                    <div className="shareOptions">
                         <div className="shareOption" onClick={()=> fileRef.current.click()}>
                              <MdPermMedia 
                                   style={{color:"tomato"}} 
                                   className="shareOptionIcon" 
                              />
                              <input 
                                   type='file' 
                                   ref={fileRef} 
                                   hidden
                                   onClick={() => selectFile()}
                                   multiple={false}
                              />
                              <span className="shareOptionText">Photo or Video</span>
                         </div>

                         <div className="shareOption">
                              <AiFillTag style={{color:"blue"}} className="shareOptionIcon"/>
                              <span className="shareOptionText">Tag</span>
                         </div>

                         <div className="shareOption">
                              <IoLocationSharp style={{color:"green"}} className="shareOptionIcon"/>
                              <span className="shareOptionText">Location</span>
                         </div>

                         <div className="shareOption">
                              <MdOutlineEmojiEmotions style={{color:"goldenrod"}} className="shareIcon"/>
                              <span className="shareOptionText">Feelings</span>
                         </div>
                    </div>
                    <button className="shareButton" onClick={sharePost}>Share</button>
               </div>
              
          </div>    
    </div>
  )
}

export default Share