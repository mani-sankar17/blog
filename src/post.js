import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./nav";


const Post = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setPost(false);
        setPosting(true);
        setTimeout(() => {
        navigate("/");
        const data = {title, name, url, desc, date};
            fetch("http://localhost:7000/memory", {
                method : "POST",
                headers :{ "Content-Type" : "application/json"},
                body: JSON.stringify(data)
            })
        }, 1000)
    }
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [desc, setDesc] = useState('');
    const [date, setDate] = useState('');
    const [post, setPost] = useState(true);
    const [posting, setPosting] = useState(false);

    return(
        <div className="post-section">
        <Navbar />
        <div className="post-container">
            <h1 className="quote neonderthaw-regular">" A good life is a collection of happy memories "</h1>
        <div className="post">
            <h3 className="grey-qo-regular">Add Post</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                value = {title}
                onChange={(e) => setTitle(e.target.value)}
                required 
                placeholder="Title"/>
                <input type="text" 
                value = {name}
                onChange={(e) => setName(e.target.value)}
                required 
                placeholder="Person's name"/>
                <input type="text" 
                value = {url}
                onChange={(e) => setUrl(e.target.value)}
                required 
                placeholder="Image URL"/>
                <textarea
                value = {desc}
                onChange={(e) => setDesc(e.target.value)}
                required rows="5" placeholder="Description" ></textarea>
                <input type="date" 
                value = {date}
                onChange={(e) => setDate(e.target.value)}
                required />
                { post && <button>Add post</button> }
                { posting && <button>Adding post</button>}
            </form>
        </div>
        </div>
        </div>
    )
}

export default Post;