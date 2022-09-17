
const Post = (props) => {
    return ( 
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Post</th>
                </tr>
            </thead>
            <tbody>
                {props.posts.map((entry, index) => {
                    return (
                        <div key={index}>
                            <div>{entry.name}</div>
                            <br></br>
                            <div>{entry.post}</div>
                            
                        </div>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Post;