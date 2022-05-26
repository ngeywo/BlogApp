import { useState } from "react";
import   { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('James');
    const [isloading, setIsLoading] = useState(false)
    const navigate = useNavigate();

    const handleSubmit= (e) =>{
        e.preventDefault();
        const posts = {title, body, author }

        setIsLoading(true);

        fetch('http://localhost:8000/posts', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(posts)
        }).then (() => {
            console.log('New blog added ');
            setIsLoading(false);
            navigate('/')
        })
    }
    return (
        <div className="container-fluid">
            <h2>Add New Post</h2>
            <form onSubmit={ handleSubmit } >
                <div className="mb-3">
                    <label >Post title:</label>
                    <input type="text"
                        required
                        value={title}
                        onChange = {(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label >Post body:</label>
                    <textarea
                        required
                        value={body}
                        onChange= {(e) => setBody(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label >Post author:</label>
                    <select 
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}                    
                    >
                        <option value="James">James</option>
                        <option value="Ann">Ann</option>
                    </select>
                </div>
                {!isloading && <button>Add post</button>}
                {isloading && <button disabled>Posting ... </button>}
            </form>
        </div>
    );
}

export default Create;