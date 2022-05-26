import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const PostDetails = () => {
    let { id } = useParams()
    const { data: post, isLoading, error } = useFetch('http://localhost:8000/posts/' + id)
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch('http://localhost:8000/posts/' + post.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/')
        })
    }

    return (
        <div className="post-details">
            {error && <div><h2> {error}</h2> </div>}
            {isLoading && <div> Loading ... </div>}
            {post && (
                <article>
                    <h2>{post.title}</h2>
                    <p>Written by: {post.author}</p>
                    <div>
                        {post.body}
                    </div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}

        </div>
    );
}

export default PostDetails;