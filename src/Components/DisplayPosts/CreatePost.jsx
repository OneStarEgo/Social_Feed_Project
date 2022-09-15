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
        props.addNewEntryProperty(newPost)
    }
    return (  
        <form onSubmit={handlePost}>
            <label>Name</label>
            <input type='name'value = {name} onChange={(event) => setName(event.target.value)} />
            <label>Post</label>
            <input type='post' value = {post} onChange={(event) => setPost(event.target.value) } />
            <button type = 'submit'>Post</button>

        </form>
    );
}

export default CreatePost;