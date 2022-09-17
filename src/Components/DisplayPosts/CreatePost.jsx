import React, {useState} from "react";

const CreatePost = (props) => {

    const [name, setName]=useState('');
    const [post, setPost] = useState('');

    function handlePost(event){
        event.preventDefault();
        
        let newPost = {
           name : name,
           post: post,        };
        console.log(newPost);
        props.addNewPostProperty(newPost)
    }
    return (  
        <form onSubmit={handlePost}>
            <label>Name</label>
            <input type='name'value = {name} onChange={(event) => setName(event.target.value)} />
            <br></br>
            <label>Post</label>
            <textarea type='post' value = {post} onChange={(event) => setPost(event.target.value) } />
            <button type = 'submit'>Post</button>

        </form>
    );
}

export default CreatePost;