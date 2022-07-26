import React,{useContext} from 'react'
import Post from '../Post/Post'
import Share from '../Share/Share'
import './feed.css'
import { posts,users } from '../../dummyData'
import { dataContexts } from '../../context'

const Feed = () => {

  const {sharedPosts} = useContext(dataContexts);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {sharedPosts.map(newPost => (
          <Post key={newPost.id} {...newPost}/>
        ))}
        {posts.map(post => (
          <Post key={post.id} {...post} users={users}/>
        ))}
      </div>
    </div>
  )
}

export default Feed