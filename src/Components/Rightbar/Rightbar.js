import React from 'react'
import { users } from '../../dummyData'
import './rightbar.css'


const Rightbar = ({location}) => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {
          location === 'profile' && (
            <>
              <h4 className="rbTitle">User Information</h4>
              <div className="rbInfo">
                <div className="rbInfoItem">
                  <span className="infoKey">City:</span>
                  <span className="infoValue">Lagos,Nigeria</span>
                </div>

                <div className="rbInfoItem">
                  <span className="infoKey">From:</span>
                  <span className="infoValue">Asaba, Delta State, Nigeria</span>
                </div>

                <div className="rbInfoItem">
                  <span className="infoKey">Relationship:</span>
                  <span className="infoValue">Single</span>
                </div>

                <h4 className="rbTitle">User Friends</h4>

                <div className="rbFollowings">

                  {
                    users.map(follower => (
                      <div className="rbFollower" key={follower.id}>
                        <img src={`/${follower.pic}`} alt="follower" className="rbFollowerImg" />
                        <span className="followerName">{follower.username}</span>
                      </div>
                    ))
                  }
             
                </div>
                
              </div>
              <img src="/Assets/ad6.jpg" alt="ad" className="ad" />
              <img src="/Assets/ad5.png" alt="ad" className="ad" />
            </>
          )
        }
        {
          location === 'home' && (
            <>
              <div className="bdayContainer">
                <img src="/Assets/gift.png" alt="" className="giftImg" />
                <span className="bdayText">
                  <b>Vera</b> and <b>3 have friends</b> have their birthdays today
                </span>   
              </div>
              <img src="/Assets/ad1.jpg" alt="ad" className="ad" />
              <h4 className='rbTitle'>Online Friends</h4>
              <ul className="rbFriendList">
                  {users.map(friend => (
                    <li className="rbFriend">
                      <div className="imageContainer">
                        <img src={`/${friend.pic}`} alt="" className="rbProPic" />
                        <span className="rbOnline"></span>
                      </div>
                      <span className="rbUsername">{friend.username}</span>
                    </li>

                  ))}
              </ul>
            </>
          )
        }
      </div>

    </div>
  )
}

export default Rightbar