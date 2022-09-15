import React, { useState } from 'react';
import Post from './Components/DisplayPosts/Post'
import CreatePost from './Components/DisplayPosts/CreatePost'

function App() {

  const [posts, setPosts] = useState([])

  function addNewPost(post){
    let tempPost = [...posts, post];

    setPosts(tempPost)
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-6'>
          <div className='border-box'>
            <CreatePost addNewPostProperty={addNewPost}/>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='border-box'>
            <Post posts={posts}/>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;