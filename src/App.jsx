import React, { useState } from 'react';
import Post from './Components/PostF/Post'
import CreatePost from './Components/CreatePosts/CreatePost'

function App() {

  const [posts, setPosts] = useState([
    {
      name : 'James',
      post: 'Project is looking good',        }
  ])

  function addNewPost(post){
    let tempPost = [...posts, post];

    setPosts(tempPost)
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h3 style={{margin: '1em'}}>Social
        <small className='text-muted'>Feed</small></h3>
        <div className='col-lg-6'>
          <div className='border-box'>
            <Post posts={posts}/>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='border-box'>
            <CreatePost addNewPostProperty={addNewPost}/>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;