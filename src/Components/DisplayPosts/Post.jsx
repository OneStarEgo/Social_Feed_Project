const Post = (props) => {
    return(
        <h1>
            <p>{props.currentPost.name}</p>
            <p>{props.currentPost.userPost}</p>
        </h1>
    );
}

export default Post