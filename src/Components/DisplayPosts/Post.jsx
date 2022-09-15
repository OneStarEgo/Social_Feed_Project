
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
                        <tr key={index}>
                            <td>{entry.name}</td>
                            <li>
                            <td>{entry.post}</td>
                            </li>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Post;