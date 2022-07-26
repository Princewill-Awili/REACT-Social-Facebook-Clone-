import React from 'react'
import './sidebar.css'
import {MdRssFeed, MdWorkOutline,MdSchool} from 'react-icons/md'
import {BsFillChatSquareTextFill,BsBookmarkFill,BsQuestionCircle} from 'react-icons/bs'
import {RiVideoLine, RiGroupFill, RiCalendarEventFill} from 'react-icons/ri'
import { users } from '../../dummyData'


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sbWrapper">
        <ul className="sbList">

          <li className="sbListItem">
            <MdRssFeed className='sbIcon'/>
            <span className="itemText">Feed</span>
          </li>

          <li className="sbListItem">
            <BsFillChatSquareTextFill className='sbIcon'/>
            <span className="itemText">Chats</span>
          </li>

          <li className="sbListItem">
            <RiVideoLine className='sbIcon'/>
            <span className="itemText">Videos</span>
          </li>

          <li className="sbListItem">
            <RiGroupFill className='sbIcon'/>
            <span className="itemText">Groups</span>
          </li>

          <li className="sbListItem">
            <BsBookmarkFill className='sbIcon'/>
            <span className="itemText">Bookmarks</span>
          </li>

          <li className="sbListItem">
            <BsQuestionCircle className='sbIcon'/>
            <span className="itemText">Questions</span>
          </li>

          <li className="sbListItem">
            <MdWorkOutline className='sbIcon'/>
            <span className="itemText">Jobs</span>
          </li>

          <li className="sbListItem">
            <RiCalendarEventFill className='sbIcon'/>
            <span className="itemText">Events</span>
          </li>

          <li className="sbListItem">
            <MdSchool className='sbIcon'/>
            <span className="itemText">Courses</span>
          </li>

        </ul>
        <button className='sbButton'>Show More</button>
        <hr className="sbHr" />
        <ul className="sbFrienList">
          {users.map(friend => (
            <li className="sbFriend" key={friend.id}>
              <img src={`/${friend.pic}`} alt="img" className="sbFriendImg" />
              <span className="sbFriendName">{friend.username}</span>
            </li>
          ))}
          
          
        </ul>
      </div>
    </div>
  )
}

export default Sidebar